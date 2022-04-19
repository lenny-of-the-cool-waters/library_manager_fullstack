const jwt = require("jsonwebtoken");

const Authorization = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ error: "User not logged in!" });
  }

  try {
    const data = jwt.verify(token, "NoaJdkjsad9");
    req.user = data;
    next();
  } catch (error) {
    res.clearCookie("token");
    return res.status(400).json({ error: "Expired Cookie!" });
  }
};

module.exports = Authorization;
