const router = require('express').Router();
const { Post } = require('../../models');
const Auth = require('../../utils/auth');

// Retrieve post
router.get("/", Auth, async (req, res) => {
    try {
        const User = await Post.findAll();
        res.status(200).json(User);
    } catch (err) {
        res.status(400).json(err);
    }   
}
)

module.exports = router;