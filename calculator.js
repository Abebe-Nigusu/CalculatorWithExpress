const express = require("express");
const bodyParser = require("body-parser")

const app = express();


app.use( express.json() ); 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

const num1 = Number(req.body.num1);
const num2 = Number(req.body.num2);
    
const resultAddition = num1 + num2;
const resultSubtraction = num1 - num2;
const resultMultiplication = num1 * num2;
const resultDivision = num1 / num2;

    res.send("The result of the calculation is: " + resultAddition);
    // res.send("The result of the calculation is: " + resultSubtraction);
    // res.send("The result of the calculation is: " + resultMultiplication);
    // res.send("The result of the calculation is: " + resultDivision);
});



app.listen(8000, ()=>console.log(`Listening on port: 8000`))