const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
// Instantiating Express application
const app = express();
// Allow cross origin resource sharing. 
app.use(cors())
// Invoking json in our express app.
app.use(express.json({ extended: false }));

// Importing our api routes
app.use('/users', require('./RestApi/user'))
app.use('/messages/', require('./RestApi/message'))

// Connecting to Mongo Db Atlas
mongoose.connect(process.env.Mongodb,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }
)

let mongoDb = mongoose.connection;
// Once Connected to mongo db
mongoDb.on('open', () => {
    console.log('Connected to Database')
})
// If there was any error
mongoDb.on('error', (error) => {
    console.log(`Faced Error ${error}`)
})
if (process.env.NODE_ENV === "production") {
    // Serves files from our dist directory 
    app.use(express.static(__dirname + '/frontend/dist'))
    // For managing the routes in a SPA
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/frontend/dist/index.html')
    })
}

const port = process.env.PORT || 5000
// Running app on a given port

const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});

// Sockets 
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('newMessage', (newMessage) => {
        socket.broadcast.emit('addMessage', newMessage)
    })
})