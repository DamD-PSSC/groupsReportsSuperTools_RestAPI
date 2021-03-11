module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // TODO: Add token validation.
    if (!authHeader) {
        const error = new Error('Token is required to proceed request.');
        error.statusCode = 400;
        throw error;
    }
    next();
};
