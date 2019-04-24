const express = require('express');
const morgan = require('morgan')
const app = express();

//Settings
app.set('port', process.env.PORT||4000);

//Middlewares
app.use(morgan('dev'));

//Ruotes
app.get('/',(req, res) => {
    res.send('Hello!')
})

app.use('/usuarios', require('./routes/usuarios.routes'))

//Server
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})