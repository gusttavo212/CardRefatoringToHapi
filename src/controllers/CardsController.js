const mongoose = require('mongoose');
const Card = require('../models/card');

module.exports = {
    async index (req, res) {
        const { page = 1 } = req.query;
    const cards = await Card.paginate({/*WHERE*/}, { page, limit: 10});

    return res.json(cards);
    }
}