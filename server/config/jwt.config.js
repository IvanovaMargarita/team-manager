const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY

module.exports = {
    authenticate(req, res, next) {
      jwt.verify(
        req.cookies.usertoken,SECRET,
        (err, payload) => {
          if (err) {
            console.log("not valid")
            res.status(401).json({ verified: false });
          } else {
            console.log("valid")
            next();
          }
        }
      );
    },
  }