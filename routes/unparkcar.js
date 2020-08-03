const router = require('express').Router();
let Cars = require('./parkingticket')

let car = Cars.Car;
console.log(Cars.Car);

router.route('/remove/:slot').post((req,res)=>{
    console.log(Cars.Car);
    const slot = Cars.Car.find(c => c.slot === parseInt(req.params.slot));
   // s.pop(slot.slot)
    
    const index= Cars.Car.indexOf(slot);
    Cars.splice(index,1);
    res.send(slot)
})

module.exports = router