const router = require("express").Router();
const { User } = require("../../models");

// const userLogin =

// User login
router.post("/login", async (req, res) => {
    User.findOne(
        {
        where: {username: req.body.username} 
    }
    ) 
    if (!userData){
        res.status(404).json({message: "User not found"});
        return;
    }

    const confirmedPassword = userData.validatePassword(req.body.password);
    if (!confirmedPassword) {
        res.status(404).json({message: "Invalid password"});
        return;
    }
    // Save successful login
    req.session.save(() => {
        req.session.loggedIn = true;
        res.json({message: "Login successful"});
    })
    if (err){
        res.status(404).json(err);
    }
})

// User log out
router.post('/logout',(req, res) => {
    if (req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        })
    }
})

// Create user
router.post("/", async(req, res) => {
    new User ({
        username: req.body.username,
        password: req.body.password
    })
    require.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(User)
    })
    if (err) {
        res.status(400).json(err);
    }
})

module.exports = router;