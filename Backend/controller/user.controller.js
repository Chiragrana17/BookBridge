// const User = require("../model/user.model");
// const bcryptjs = require("bcryptjs");

// const signup = async(req, res) => {
//     try {
//         const { fullname, email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ message: "User already exists" });
//         }
//         const hashPassword = await bcryptjs.hash(password, 10);
//         const createdUser = new User({
//             fullname: fullname,
//             email: email,
//             password: hashPassword, // Use 'password' field name
//         });
//         await createdUser.save();
//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// module.exports = signup;

// const login = async(req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         const isMatch = await bcryptjs.compare(password, user.password);
//         if (!user || !isMatch) {
//             return res.status(400).json({ message: "Invalid username or password" });
//         } else {
//             res.status(200).json({
//                 message: "Login successful",
//                 user: {
//                     _id: user._id,
//                     fullname: user.fullname,
//                     email: user.email,
//                 },
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// module.exports = login;

const User = require("../model/user.model");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword, // Use 'password' field name
    });
    await createdUser.save();
    res.status(201).json({
      message: "user created succesfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
    s;
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // If user is not found, or password doesn't match, return error
    if (!user || !(await bcryptjs.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // If authentication succeeds, return user data
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signup, login };
