const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;
  if (!username || !password) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Missing username or password" });
  }

  const user = await Admin.findOne({ username, password });
  if (!user) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Invalid username or password" });
  }

  req.user = user; 
  next();
}

module.exports = adminMiddleware;
