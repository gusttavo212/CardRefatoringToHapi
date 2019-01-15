const hapi = require('hapi');

const app = new hapi.Server({
    port:5000    
});

const start = async () => {
    await app.start();
    console.log(`Server is running at ${app.info.port}`);    
};

start();