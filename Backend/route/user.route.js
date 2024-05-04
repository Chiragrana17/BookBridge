// const express = require("express");
// const signup = require("../controller/user.controller");
// const login = require("../controller/user.controller");
// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);

// module.exports = router;

const express = require("express");
const { signup, login } = require("../controller/user.controller");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;