const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const {username, password} = req.headers;
    if (!username || !password) {
        return res.status(401).json({ error: "Unauthorized: Missing username or password" });
    }

    const user = await User.findOne({ username, password });
    if (!user) {
        return res.status(401).json({ error: "Unauthorized: Invalid username or password" });
    }

    req.user = user; // Attach user to request object for further use
    next(); // Call the next middleware or route handler

}

module.exports = userMiddleware;