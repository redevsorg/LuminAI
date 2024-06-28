exports.UserController = {
    // TODO: Add User Controller
    getUser: (req, res) => {
        res.status(200).json({ message: 'User retrieved successfully' });
        return res.send(req.params.id).status(200)
    },

    registerUser: (req, res) => {
        res.status(200).json({ message: 'User registered successfully' });
        return res.send({user_registered: req.body.user}).status(200)
    },
}