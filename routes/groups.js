const express = require('express');
const { getAllGroups } = require('../services/msGraphAPI');

const router = express.Router();

router.get('/allgroups', async (req, res) => {
    console.log('All groups request');
    const data = await getAllGroups(req.headers.authorization);
    return res.status(200).json(data);
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
