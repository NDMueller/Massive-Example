var app = require('./../index.js');
var db = app.get('db');

module.exports = {
  getData: function(req, res, next) {
    db.products.get(function(err, products) {
      if(err) {
        console.log(err);
        return res.status(400).send(err);
      }

      return res.status(200).send(products);
    });
  }
};
