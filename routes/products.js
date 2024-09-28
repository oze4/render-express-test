const productsRouter = require("express").Router();

productsRouter.get("/", (req, res) => {
  const product = { id: 99, name: "Foo", description: "I am product foo. I do xyz." };
  res.status(200).json({ data: product, status: 200, success: true });
});

module.exports = productsRouter;