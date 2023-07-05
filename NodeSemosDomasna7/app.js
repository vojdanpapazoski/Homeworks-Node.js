//? DA SE KREIRA CONTROLLER VO KOJ KONROLER KJE BIDAT OVIE FUNKCII
//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objketot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja
// --------------------------------------------------------------------

const express = require("express");

// so require funkcijata se startira ejs modulot 

const app = express();
const { getZelenchuk, postZelenchuk } = require("./controllers/index");
app.use(express.urlencoded({ extended: true }));
// vaka ja konfigurirame ekspres js da go koristi ovoj middleware

app.set("view engine", "ejs");
// vaka kazuvame na express js deka sakame da go koristime ejs kako engine na za dinamicki html sodrzini 
// --------------------------------------------------------------------


app.get("/zelencuk", getZelenchuk);
app.post("/zelencuk", postZelenchuk);


app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started on port 10000");
});

