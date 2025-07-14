
const { Admin } = require("../db");
const jwt = require("jsonwebtoken");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
   
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ error: "Unauthorized: Missing token" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded) {
        return res
          .status(401)
          .json({ error: "Unauthorized: Invalid token" });
      }

      const user = await Admin.findById(decoded.id);
      if (!user) {
        return res
          .status(401)
          .json({ error: "Unauthorized: Invalid username or password" });
      }
    
      req.user = user; 
      next();

}

module.exports = adminMiddleware;