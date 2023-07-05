//? DA SE KREIRA LOGIKA KAKO KJE GO BRISHIME STUDENTOT
// --------------------------------------------------------------------

const express = require("express");
// ovde go povikuvame express vo aplikacijata 

const app = express();
// ovde go startuvame express vo aplikacijata 

app.use(express.urlencoded({ extended: true }));
// vaka ja konfigurirame ekspres js da go koristi ovoj middleware, extended true ovozmozuva da bide bilo koj data tip
// middleware e se ona sto se slucuva pomegju request i response 


//when extended is TRUE req.body can be any type (string, object, array, number, undefined)
//when extended is FALSE req.body can be only string or array

app.set("view engine", "ejs");
// vaka kazuvame na express js deka sakame da go koristime ejs kako engine za dinamicki html sodrzini 
// --------------------------------------------------------------------

let studenti = 
[
   {ime: "Vojdan",
    prezime: "Papazoski",
    prosek: 9.0,
    grad:"Skopje"},
   
    {ime: "Dragan",
    prezime: "Jolevski",
    prosek: 7.0,
    grad:"Bitola"},

    {ime: "Andrea",
    prezime: "Kostovska",
    prosek: 7.7,
    grad:"Veles"},

    {ime: "Jovan",
    prezime: "Jankuloski",
    prosek: 7.8,
    grad:"Ohrid"},

    {ime: "Sofija",
    prezime: "Mirceva",
    prosek: 9.8,
    grad:"Kavadarci"},
];

app.get("/", (req, res) => {
    res.render('index.ejs', { studenti });
});

app.post("/", (req, res) => {
    const novStudent = {
      ime: req.body.ime,
      prezime: req.body.prezime,
      prosek: req.body.prosek,
      grad: req.body.grad
    }
    studenti.push(novStudent);
    res.render('index.ejs',{studenti});
  });
  

  app.post("/delete/:ime", (req, res) => { // na ovaa ruta se setira za brisenje na ime od aplikacijata 
    const { ime } = req.params; //ovaj del pravi varijabila ime i go dava imeto koe sakame da go izbriseme

    studenti = studenti.filter(student => student.ime !== ime);
  // ovde go filtrirame arejot studenti spored koj imeto na sekoj student ne treba da e isto so zadadenoto ime 
    res.redirect("/");
    // ovde se redirektira kon root i se prikazuvaat koj se izbrisani
  });
  

  app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log("Server successfully started on port 10000");
  });
  


