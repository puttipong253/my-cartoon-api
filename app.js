const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const msql = require("mysql");
const port = 8080;


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const dbConnect = msql.createConnection({
//   host: "",
//   user: "",
//   password: "",
//   database: "",
// });

// dbConnect.connect()

app.get("/getData", (req, res) => {
  res.send("jame");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
