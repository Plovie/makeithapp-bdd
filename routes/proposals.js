const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');
const models = require('../models');



router.get('/proposals/:id/relationships/orders',
    Liana.ensureAuthenticated, (req, res, next) => {
        let limit = parseInt(req.query.page.size) || 10;
        let offset = (parseInt(req.query.page.number) - 1) * limit;
        // console.log(req.params);
        let queryType = models.sequelize.QueryTypes.SELECT;

        let countQuery = `
          SELECT COUNT(*)
          FROM orders
          JOIN proposals ON orders.id = proposals.order_id
          WHERE proposals.id= ${req.params.id}`

        let dataQuery = `
          SELECT orders.*
          FROM orders
          JOIN proposals ON orders.id = proposals.order_id
          WHERE proposals.id= ${req.params.id}
          LIMIT ${limit}
          OFFSET ${offset}
        `;

        return Promise
            .all([
                models.sequelize.query(countQuery, {type: queryType}),
                models.sequelize.query(dataQuery, {type: queryType})
            ])
            .then((res) => {
                const [count, orders] = res;
                return new Liana.ResourceSerializer(Liana, models.orders, orders, null, {}, {
                    count: count[0].count
                }).perform();
            })
            .then((orders) => {
                res.send(orders);
            })
            .catch((err) => next(err));
    });

module.exports = router;
