var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req,res){
    burgers.selectAll(function(data){
        
        var burgerObject = {
            burgers: data
        };  
        console.log(burgerObject);
              
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res){

    console.log(req.body);
    
    burgers.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){

        res.json({id: result.insertId});

    })
})

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            }

            res.status(200).end();
        }

    )
})

module.exports = router;