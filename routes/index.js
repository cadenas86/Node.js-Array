var express = require('express');
var router = express.Router();

let flowers = ['Orchid', 'Iris', 'Hydrangea', 'Amaryllis', 'Dahlia', 'Daffodil', 'Bleeding Heart'];
/* GET home page. */
router.get('/', function(req, res, next){
  let queryFlower = req.query.flower;
  if (flowers.includes(queryFlower)){
    res.send('yep, we have ' + queryFlower + '.'); 
  }else {
    res.send('Nope, no ' + queryFlower + ' here.');
  }
});

module.exports = router;
