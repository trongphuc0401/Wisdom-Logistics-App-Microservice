const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/order", proxy("http://localhost:8001"));
app.use("/customer", proxy("http://localhost:8002"));
app.use("/shipment", proxy("http://localhost:8003"));
app.use("/warehouse", proxy("http://localhost:8004"));
app.use("/product", proxy("http://localhost:8005"));
app.use("/payment", proxy("http://localhost:8006"));

app.listen(8000, () => {
    console.log("Gateway is Listening to Port 8000");
  });