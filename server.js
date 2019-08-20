const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 3000;
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');

//Express HBS
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hello World')

    res.render('home', {
        nombre: "Maquina",
        anio: new Date().getFullYear(),
    });

})

app.get('/about', (req, res) => {


    res.render('about', {
        anio: new Date().getFullYear(),
    });

})

// app.get('/Home', (req, res) => {
//     let home = "Soy el rey del mundoo!!";

//     res.send(home)
// })

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})