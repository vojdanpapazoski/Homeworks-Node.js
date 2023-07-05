//? DA SE KREIRA CONTROLLER VO KOJ KONROLER KJE BIDAT OVIE FUNKCII
//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objketot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja

let domasna = {
    ime: "Vojdan",
    prezime: "Papazoski",
    ovoshje: ["Jabolko", "Praska", "Kajsija", "Krusha"],
    zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
    vitmini: [
        { ime: "Jabolko", vitamin: "C", mineral: "kalcium" },
        { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
        { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
        { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
        // { ime: "Domat", vitamin: "G", mineral: "Srebro" },
    ],
};


const getZelenchuk = (req, res) => {
    res.render('index.ejs', { domasna });
};

const postZelenchuk = (req, res) => {
    const { ovoshje, zelenchuk, vitamin, mineral } = req.body;
    domasna.ovoshje.push(ovoshje);
    domasna.zelenchuk.push(zelenchuk);
    domasna.vitmini.push({ vitamin, mineral });
    res.render('index.ejs', { domasna });
  };
  


module.exports = { getZelenchuk, postZelenchuk }






