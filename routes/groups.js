const express = require('express');

const router = express.Router();

router.get('/allgroups', (req, res) => {
    console.log(req.headers.authorization);
    res.status(200).json(req.headers.authorization);
});

module.exports = router;
