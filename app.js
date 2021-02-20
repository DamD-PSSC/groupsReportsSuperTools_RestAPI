const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const groupsRoutes = require('./routes/groups');
const isTokenSent = require('./middleware/isTokenSent');

// Application preconfiguration.
const app = express();
dotEnv.config();
app.use(morgan('dev'));

// Middleware.
app.use(bodyParser.json());

app.use(cors());

// Bearer token check middleware
app.use(isTokenSent);

// Routes.

app.use('/groups', groupsRoutes);

// Error handler
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const { message, data } = error;
    res.status(status).json({ message, data });
});

// Server start.
app.listen(process.env.SERVER_PORT || 4000, () => {
    if (!process.env.SERVER_PORT) {
        console.log('Server run on port 4000.');
    } else {
        console.log(`Server run on port ${process.env.SERVER_PORT}`);
    }
});
