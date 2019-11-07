const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

function MLPart() {
  const Script = './public/Python_Scripts/Main_Script.py';
  const {
    PythonShell
  } = require('python-shell');
  const pyshell = new PythonShell(Script);
}

function Recognize() {
  const Script = './public/Python_Scripts/Recognize.py';
  const {
    PythonShell
  } = require('python-shell');
  const pyshell = new PythonShell(Script);
}
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  let rawdata = fs.readFileSync("./public/Python_Scripts/laptops.json");
  let data = JSON.parse(rawdata);
  let strdata = JSON.stringify(data);
  MLPart();
  console.log("New Data Generated!");
  res.render("index", {
    proData: strdata
  });
});
app.get("/products", (req, res) => {
  res.render("products");
});
app.get("/", (req, res) => {
  res.render("index");
});
app.post('/', (req, res, next) => {
  let data = req.body;
  let kData = data[1];
  kData.push(data[0]);
  let jsData = {
    Data: kData
  };
  let jsonStr = JSON.stringify(jsData);
  fs.writeFileSync('./public/Python_Scripts/TestData.json', jsonStr);
  Recognize();
  return res.json({
    success: true
  })
})
app.listen(3000, () => {
  console.log("Hola Amigos , Server is Running!");
});