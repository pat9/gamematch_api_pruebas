const express = require('express');
const router= express.Router();

router.get('/login', (req, res) =>{
    res.send(`You're in login`);
})

module.exports = router;