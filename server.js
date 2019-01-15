const hapi = require('hapi');
const markeConnect = require('./src/bd/connectMongoDb').markeConnect;//Conectart ao dataBase
const Card = require('./src/models/card');
const routes = require('./src/routes/routes');

const app = new hapi.Server({
    port:5000    
});

const start = async () => {
    
    app.route(routes);

    await app.start();
    console.log(`Server is running at ${app.info.port}`);    
};

start();