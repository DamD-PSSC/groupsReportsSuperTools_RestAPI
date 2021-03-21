const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const passportAzureAD = require('passport-azure-ad');
const groupsRoutes = require('./routes/groups');
const groupRoutes = require('./routes/group');
const auth = require('./config/auth.json');

// Application preconfiguration.
const app = express();
dotEnv.config();
app.use(morgan('dev'));

// Middleware.
app.use(bodyParser.json());

app.use(cors());

// Bearer token check middleware
const { BearerStrategy } = passportAzureAD;

const options = {
    identityMetadata: `https://${auth.authority}/${auth.tenantID}/${auth.version}/${auth.discovery}`,
    issuer: `https://${auth.authority}/${auth.tenantID}/${auth.version}`,
    clientID: auth.clientID,
    audience: auth.audience,
    validateIssuer: auth.validateIssuer,
    passReqToCallback: auth.passReqToCallback,
    loggingLevel: auth.loggingLevel,
    scope: auth.scope,
};

const bearerStrategy = new BearerStrategy(options, (token, done) => {
    done(null, {}, token);
});

app.use(passport.initialize());

passport.use(bearerStrategy);

// Routes.
app.use(
    '/groups',
    passport.authenticate('oauth-bearer', { session: false }),
    groupsRoutes
);
app.use(
    '/group',
    passport.authenticate('oauth-bearer', { session: false }),
    groupRoutes
);

// Error handler
app.use((error, req, res) => {
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
