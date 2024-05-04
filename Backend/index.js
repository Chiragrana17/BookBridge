const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");

const bookRoute = require("./route/book.route");
const userRoute = require("./route/user.route");
app.use(cors());
app.use(express.json());
try {
  mongoose.connect(
    "mongodb+srv://chirag:chirag@cluster0.lsmjxbm.mongodb.net/bookStore",
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }
  );
  console.log("connected to mongodb");
} catch (error) {
  console.log(error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
