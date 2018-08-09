var orm = require("../config/orm.js");

var burger ={
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    },
    //cols and vals are arrays, wish I knew typescript!
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        })
    },
    update: function(objColVals, condition, cb){
        console.log("condition at burger.js",objColVals)
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        })
    },
    delete: function(id,cb){
        orm.delete("burgers", id, function(res){
            cb(res)
        })
    }
}


module.exports = burger;