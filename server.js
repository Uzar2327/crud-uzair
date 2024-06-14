const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors()); 

mongoose
  .connect("mongodb://localhost:27017/To-do", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const taskRoutes = require("./routes/tasks");
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
