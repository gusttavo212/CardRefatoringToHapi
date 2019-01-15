module.exports = [    
        {
            method: 'GET',
            path: '/',
            handler: function(request, reply) {
                return(`<h1>Hello World</h1>`);     
            }
       },     

];

