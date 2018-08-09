var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hvsObject ={
            burgers: data
        };
        console.log(hvsObject);
        res.render("index", hvsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "name", "eaten"
    ],[
        req.body.name, req.body.eaten
    ], function(result){
        res.json({id: result.insertId});
    })
})

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = "+ req.params.id;
    console.log("req =",req.body)
    burger.update({
        eaten: req.body.eaten
    }, condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    })
})
router.delete("/api/burgers/:id", function(req, res){
    var id = req.params.id;

    console.log(id);
    burger.delete(id, function(result){
        res.status(200).end()
    })
})
module.exports =router;