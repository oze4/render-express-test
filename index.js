const express = require("express");

const app = express();
process.env.PORT = process.env.PORT || 5000;

// Global middleware
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/products"));

// Root route
app.get("/", (_req, res) => {
  res.status(200).json({ data: "hello from root", status: 200, success: true });
})

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(`Error starting server! ${err}`);
    return;
  }
  console.log(`Server listening on port ${process.env.PORT}`);
});