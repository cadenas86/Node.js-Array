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

router.post('/', function(req, res, next){
  let bodyFlower = req.body;
  if (flowers.includes(bodyFlower.flower)){
    res.send('We already have that flower, no need to add it');
  }else{
    flowers.push(bodyFlower.flower);
    res.send(flowers);
  }
});
module.exports = router;
