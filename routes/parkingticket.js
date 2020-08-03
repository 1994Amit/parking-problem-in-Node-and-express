const { request } = require('http');

const router = require('express').Router();
require('dotenv').config();

let Car = [{slot:0 , registratonNo:""}];
//let maxSize = 8;
const maxSize = parseInt(process.env.MAX_SIZE);
console.log(maxSize);

router.route('/add').post((req,res)=>{
    let reg = req.body.registratonNo
    if(maxSize != Car.length){
        var x = Math.floor((Math.random() * maxSize) + 1);
        while(1){
            if(Car.find(s => s.slot === x)){
                console.log("slot already in use");
                x = Math.floor((Math.random() * maxSize) + 1);
            }
            else{
                break;
            }
        }
        // var x = Math.floor((Math.random() * maxSize) + 1);
        // if(Car.find(s => s.slot === x)){
        //     console.log("slot already in use") 
        // }
        //else{
            //s.push(x)
        var name = req.body.registratonNo
        if(Car.find(s => s.registratonNo === name)){
            console.log("car already exist");
            const Cars={    
                error: "Car already exists"
            }
            res.send(Cars);
        }
        else{
            
            const Cars={    
                slot: x,
                registratonNo: name
            }
            Car.push(Cars);
            res.send(Cars);
            
        }
        //}
    
    }

    else{
        const Cars={    
            error:'No slot Available'
        }
        res.send(Cars);
    }
});



router.route('/remove/:slot').delete((req,res)=>{

    const slot = Car.find(c => c.slot === parseInt(req.params.slot));
   // s.pop(slot.slot)
   
    const index= Car.indexOf(slot);
    Car.splice(index,1);
    res.send(slot)
});

router.route('/find/:slot').get((req,res)=>{
    if(slot=Car.find(c => c.slot === parseInt(req.params.slot))){
      //  const slot = Car.find(c => c.slot === parseInt(req.params.slot))
        res.send(slot)
    }
    else if (c = Car.find(c => c.registratonNo === (req.params.slot))){
      //  const c = Car.find(c => c.registratonNo === (req.params.slot));
        res.send(c)
    }
    else{
        const Cars={
            error:"invalid information"
        }
        res.send(Cars)
    }
});

router.route('/add').get((req,res)=>{

    res.send(Car)

});

module.exports = router