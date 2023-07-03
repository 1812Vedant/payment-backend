const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const errorController = require("./controller/errorController");
const app = express();
//to read json
app.use(express.json());

app.listen(4000, () => {
  console.log("server listening on port 3000");
  mongoose
    .connect("mongodb+srv://root:root@cluster0.nwce5qr.mongodb.net/letpurchase")
    .then(() => {
      console.log("connection established");
    });
});

// app.get("/user", (req, res) => {
//   res.status(202).json({
//     message: "success",
//   });
// });
app.use("/v1/user", userRouter);
app.use(errorController);
