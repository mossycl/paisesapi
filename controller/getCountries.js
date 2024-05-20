const paises = require("../paises");
const { request, response} = require("express");

const paisesData = paises.paises;

const getCountries = (req = request, res = response) =>{
    return res.json({
        ok : true,
        paisesData,
        statusCode : 200
    });
}

const getCountry = (req = request, res = response) => {
    const id = req.params.id;
    
     // Busca el país por su ID
     const pais = 
     paisesData.find((pais) => {
         return parseInt(pais.id) === parseInt(id)
     });
 
 if (pais) {
     return res.json({
         ok: true,
         pais,
         statusCode: 200
     });
 } else {
     return res.status(404).json({
         ok: false,
         message: "País no encontrado",
         statusCode: 404
     });
 }

}

module.exports = {
    getCountries,
    getCountry
};