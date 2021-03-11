const express = require('express');

const router = express.Router();

router.get('/:groupId/details', (req, res) => {
    // TODO: Add groupId check
    console.log(req.params);
    return res.status(200).json('OK');
});

router.get('/:groupId/owners', (req, res) => {
    // TODO: Add groupId check
    console.log(req.params);
    return res.status(200).json('OK');
});

router.get('/:groupId/members', (req, res) => {
    // TODO: Add groupId check
    console.log(req.params);
    return res.status(200).json('OK');
});

router.get('/:groupId/memberof', (req, res) => {
    // TODO: Add groupId check
    console.log(req.params);
    return res.status(200).json('OK');
});

module.exports = router;
