const jwt = require("jsonwebtoken")

const token = jwt.sign({
  username: "admin"
}, 'login')

jwt.verify(token, "login", (err, payload) => {
  console.log(err, payload);
})