const express = require("express");
const app = express();
app.use(express.json());
const port = 3010;

const cors = require("cors");
app.use(cors());

app.use("/uploads", express.static("uploads"));

const { imagedataRoutes } = require("./routes/imagedataRoutes");

app.use("/api", imagedataRoutes);

app.listen(port, (err) => {
  console.log(`server is connected on port http://localhost:${port}`);
});
