const nodeFetch = require('node-fetch');
const { Client } = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

// Helper functions.
// const msGraphRequest = async (url, accessToken) => {
//     const request = await nodeFetch(url, {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: accessToken,
//         },
//     });
//     const data = await request.json();
//     return data;
// };

// Some callback function
// const buildGraphClient = (accessToken) => {
//     // const authProvider = (callback) => {
//     //     let error;
//     //     callback(error, accessToken);
//     // };
//     // const options = {
//     //     authProvider,
//     // };
//     const client = Client.init({
//         authProvider: (done) => {
//             done(null, `Bearer ${accessToken}`);
//         },
//     });
//     // console.log(client);
//     return client;
// };

// Services
exports.getAllGroups = async (accessToken) => {
    // const graphRequest = await msGraphRequest(
    //     'https://graph.microsoft.com/v1.0/groups',
    //     accessToken
    // );
    const graphClient = buildGraphClient(accessToken);
    const graphRequest = await graphClient.api('/groups').get();
    return graphRequest;
};
