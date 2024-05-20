
const express = require("express");
const app = express();
const port = 2020 // Puerto

const { getCountries, getCountry } = require("./controller/getCountries")

app.get("/", getCountries);

app.get("/:id", getCountry);
app.listen(port, () =>{
    console.log(`Conexion correcta en puerto: ${port}`)
})