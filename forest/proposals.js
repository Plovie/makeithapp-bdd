const Liana = require('forest-express-sequelize');
const models = require('../models/');
const service = require('../services/status_proposals')



Liana.collection('proposals', {
    segments: [].concat(service.constructSegmentByStatus('proposals')),
    fields: [{
        field: 'orders',
        type: ['String'],
        reference: 'orders.id',

    }
    ]
});

