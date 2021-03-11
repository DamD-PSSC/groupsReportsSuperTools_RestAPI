const nodeFetch = require('node-fetch');

// Helper functions.
const msGraphRequest = async (url, accessToken) => {
    const request = await nodeFetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken,
        },
    });

    const data = await request.json();
    return data;
};

// Services
exports.getAllGroups = async (accessToken) => {
    const graphRequest = await msGraphRequest(
        'https://graph.microsoft.com/v1.0/groups',
        accessToken
    );
    return graphRequest;
};
