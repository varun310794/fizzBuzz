'use strict';
module.exports = function(app) {
  var controller = require('../controllers/fizzBuzzController');

  app.route('/fizzBuzz')
    .post(controller.fizzBuzz);

};