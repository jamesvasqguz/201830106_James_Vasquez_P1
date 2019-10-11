//imports
const path = require('path');
const express = require('express');
const app = express();

var exec = require('child_process').exec;

//configuracion
app.set('view engine','ejs');
app.set('port',3000);
app.set('views',path.join(__dirname, 'pages'));

//Rutas
app.use(require('./routes/routeIndex'));

//middleware
app.use(express.static(path.join(__dirname, 'public')));

//escucha
app.listen(app.get('port'), () => {

    console.log('escuchando en el puerto ', app.get('port'));
});