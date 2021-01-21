const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const cors = require('cors');

// Application preconfiguration.
const app = express();
dotEnv.config();

// Middleware.
app.use(bodyParser.json());

app.use(cors());

// Routes.

// Server start.
app.listen(process.env.SERVER_PORT || 4000, () => {
    if (!process.env.SERVER_PORT) {
        console.log('Server run on port 4000.');
    } else {
        console.log(`Server run on port ${process.env.SERVER_PORT}`);
    }
});
