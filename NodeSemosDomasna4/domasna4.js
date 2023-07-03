const http = require('http')
const url = require('url');

server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Cao decki kako ste');
    }


    else if (req.url === '/julija') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        const ime = 'Julija'
        const samoglaska = ime.split('')
        pronajdeniSamoglaski = samoglaska.filter((edna) => {
            return edna === 'a' ||
                edna === 'e' ||
                edna === 'i' ||
                edna === 'o' ||
                edna === 'u';
        });
        soglaski = ime.split('')
        pronajdeniSoglaski = soglaski.filter((site) => {
            return /^[a-z]$/i.test(site) && !pronajdeniSamoglaski.includes(site);
        });

        res.end(`
        Imeto ${ime} ima ${ime.length} karakteri !
        Imeto ${ime} ima paren broj karakteri -  ${(ime.length % 2 === 0)} 
        Samoglaski se ${pronajdeniSamoglaski}
        Soglaski se ${pronajdeniSoglaski}
        `)
    }



    else if (req.url === '/andrej') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })



        const ime = 'andrej'
        const samoglaska = ime.split('')
        pronajdeniSamoglaski = samoglaska.filter((edna) => {
            return edna === 'a' ||
                edna === 'e' ||
                edna === 'i' ||
                edna === 'o' ||
                edna === 'u';
        });
        soglaski = ime.split('')
        pronajdeniSoglaski = soglaski.filter((site) => {
            return /^[a-z]$/i.test(site) && !pronajdeniSamoglaski.includes(site);
        });

        res.end(`
        Imeto ${ime} ima ${ime.length} karakteri !
        Imeto ${ime} ima paren broj karakteri -  ${(ime.length % 2 === 0)} 
        Samoglaski se ${pronajdeniSamoglaski}
        Soglaski se ${pronajdeniSoglaski}
        `)

    }

});


server.listen(10000, (err) => {
    if (err) console.log("error");
    console.log("server started on port 10000");
});




