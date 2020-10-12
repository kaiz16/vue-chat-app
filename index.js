const express = require('express');
const mongoose = require('mongoose')
// const path = require('path')
const cors = require('cors')

require('dotenv').config()
// Instantiating Express application
const app = express();
// Allow cross origin resource sharing. 
app.use(cors())
// Invoking json in our express app.
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use('/api/users', require('./RestApi/user'))
    app.use('/api/messages', require('./RestApi/message'))
} else {
    app.use('/users', require('./RestApi/user'))
    app.use('/messages', require('./RestApi/message'))
}

// Create a .env file and place your DB connection string 
// Mongodb = your Mongo Db connection string
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

if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public'))

    // Handle SPA (Vue Frontend)
    app.get('/.*/', (req, res) => {
        res.sendFile(__dirname + 'public/index.html')
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
    socket.on('deleteMessage', (_id) => {
        console.log(_id)
        // socket.broadcast.emit('messageDeleted', _id)
    })
})