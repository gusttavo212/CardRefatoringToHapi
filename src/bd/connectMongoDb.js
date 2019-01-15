const mongoose = require('mongoose');

//Conect MongoDB
mongoose.connect('mongodb://gadsden:250433@localhost/cardsHapi?authSource=admin&w=1',
 { useNewUrlParser: true });

 const markeConnect = mongoose.connection;

 markeConnect.on('error', console.error.bind(console, 'connection error'));
 markeConnect.once('open', () => {
     console.log('Connect with database succeeded');
 })

 exports.markeConnect;
