const hapi = require('hapi');

const app = new hapi.Server({
    port:5000    
});

const start = async () => {
    app.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            return `<h1>Hello Wolrd</h1>`         
        }
    });

    await app.start();
    console.log(`Server is running at ${app.info.port}`);    
};

start();