const mongoose = require('mongoose');
const connection = 'mongodb://localhost/gamematch'

mongoose.connect(connection).then(() =>{
    console.log('database is connected')
}).catch(err=>{
    console.log(err)
})

module.exports = mongoose;