const express = require("express");
const cookieParser=require("cookie-parser")
const app = express();
require("dotenv").config();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');


app.use(cookieParser());
app.use(express.json());

const router = require("./routes/routes");
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/",(req,res)=>{
  res.json({message:"ok"})
  console.log("ok");
})
app.use("/", router);

app.listen(process.env.PORT,"localhost", () => {
  console.log(`SERVER IS RUNNING AT PORT '${process.env.PORT}`);
});


