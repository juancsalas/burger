var orm = require('../config/orm.js');

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(columns, values, cb){
        orm.insertOne("burgers", columns, values, function(res){
            cb(res);
        })
    },
    updateOne: function(objectPairVals, condition, cb){
        orm.updateOne("burgers", objectPairVals, condition, function(res){
            cb(res);
        })
    }
}

module.exports = burgers;