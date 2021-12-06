const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let blogs = [
  {
    key: 1,
    title: "first things to do While coding..",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium commodi modi optio dolorem? Asperiores, dolores....",
  },
  {
    key: 2,
    title: "second things to do While coding..",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium commodi modi optio dolorem? Asperiores, dolores....",
  },
  {
    key: 3,
    title: "third things to do While coding..",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium commodi modi optio dolorem? Asperiores, dolores....",
  },
  {
    key: 4,
    title: "fourth things to do While coding..",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium commodi modi optio dolorem? Asperiores, dolores....",
  },
];

// home route
app.get("/", (req, res) => {
  res.render("index", { allblogs: blogs });
});
// single blog item route
app.get("/blog/:id", (req, res) => {
  res.render("singleblog", { singleblog: blogs[req.params.id] });
});

app.post("/", (req, res) => {
  const blogid = blogs.length + 1;
  const blogItem = { id: blogid, title: req.body.title, body: req.body.body };
  blogs.push(blogItem);
  res.redirect("/");
  console.log(blogid);
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started @" + process.env.PORT);
});
