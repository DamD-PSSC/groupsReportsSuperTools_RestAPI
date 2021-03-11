const express = require('express');

const router = express.Router();

router.get('/allgroups', (req, res) => {
    console.log('All groups request');
    return res.status(200).json('OK');
});

router.get('/filteredgroups', (req, res) => {
    if (!req.body.filterOptions) {
        const error = new Error(
            'Filtered options are required to proceed request.'
        );
        error.statusCode = 400;
        throw error;
    }
    return res.status(200).json(req.headers.authorization);
});

module.exports = router;
