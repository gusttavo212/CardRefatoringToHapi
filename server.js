const hapi = require('hapi');
const markeConnect = require('./src/bd/connectMongoDb').markeConnect;//Conectart ao dataBase
const Card = require('./src/models/card');

const app = new hapi.Server({
    port:5000    
});

const start = async () => {
    app.route([
        {
            method: 'GET',
            path: '/',
            handler: function(request, reply) {
                return `<h1>Hello Wolrd</h1>`         
            }
        },
        
]);

    await app.start();
    console.log(`Server is running at ${app.info.port}`);    
};

start();