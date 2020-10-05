const router = require('express').Router()
const userSchema = require('../Models/User')

// Getting all the users
router.get('/', (req, res) => {
    userSchema.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
})
// Get a user by user userName when login
router.get('/:userName', (req, res) => {
    userSchema.findOne({ userName: req.params.userName })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})
// Creating a user
router.post('/create', async (req, res) => {
    // Checks if the user exist
    const isExist = await userSchema.findOne({ userName: req.body.userName })
    // If yes then we throw an error.
    if (isExist) return res.status(400).json('User Already Exist!!')
    // If not exist then we create a new user
    const newUser = new userSchema({
        userName: req.body.userName,
    })
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})
// Deleting a user 
router.delete('/delete/:id', (req, res) => {
    userSchema.findByIdAndDelete(req.params.id)
        .then(({ userName }) => res.json(`${userName} is Deleted`))
        .catch(err => res.status(400).json(err))
})
module.exports = router