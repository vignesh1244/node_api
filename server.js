// console.log('Heeello');
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModels");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/blog", (req, res) => {
  res.send("Hello World this is blog ggggggg111hgeflkjadslfk");
});
app.get("/blog", (req, res) => {
  res.send("Hello World this is blog ggggggg111hgeflkjadslfk");
});

app.get("/blog/v", (req, res) => {
  res.send("vvvvvvvvvvviiiiiiggggggnnnnnnneeeeeesssssshhhh");
});

//fetch product

app.get("/products", async (req, res) => {
  try {
    // return "allow";
    const products = await Product.find(req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//fetch prodluct by id

app.get("/products/:id", async (req, res) => {
  try {
    // return "allow";
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/product", async (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  // // return "allow";
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update product
app.put("/products/:id", async (req, res) => {
  try {
    // return "allow";
    const { id } = req.params;
    const product = await Product.findById(id, res.body);
    res.status(200).json(product);
    if (!product) {
      return res
        .status(404)
        .json({ message: "can find any product by id $id ${id}" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://master:1234567master@buildapi.9bwvbgd.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("node runnig portal 3000 local host then golabal");
    });
  })
  .catch((error) => {
    console.log(error);
  });
