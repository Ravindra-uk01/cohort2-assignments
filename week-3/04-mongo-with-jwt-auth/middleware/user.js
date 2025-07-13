const { User } = require("../db");

async function userMiddleware(req, res, next) {
   
    const {username, password} = req.headers;
    if (!username || !password) {
        return res.status(401).json({ error: "Unauthorized: Missing username or password" });
    }

    const user = await User.findOne({ username, password });
    if (!user) {
        return res.status(401).json({ error: "Unauthorized: Invalid username or password" });
    }

    req.user = user; 
    next(); 

}

module.exports = userMiddleware;