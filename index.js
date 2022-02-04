const express = require("express");
const app = express();
const tokensData = require("./tokens.json")
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hoolloo")
})

app.get("/tokens", (req, res) => {
    res.send(tokensData)
})

app.listen(port, () => {
    console.log(`App example is listening on port http://localhost:${port}`);
})

