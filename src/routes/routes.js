const CardModel = require('../models/card');

module.exports = [    
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            return CardModel.find();
        }
    },
    {
        method: 'POST',
        path: '/',
        handler: function (request, reply) {          
           const { name, price, description} = request.payload;
           const card = new CardModel({
               name,
               price,
               description
           });

           return card.save();
        }
    }
];

