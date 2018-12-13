var connection = require ("./connection.js")

function printQuestionMarks(valueNumbers) {
    var arr = [];
  
    for (var i = 0; i < valueNumbers; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

function objToSql(objectPair) {
    var objectArray = [];
  
    for (var key in objectPair) {
      var value = objectPair[key];

        if (Object.hasOwnProperty.call(objectPair, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            objectArray.push(key + "=" + value);
        }
    }

    return objectArray.toString();
}


var orm = {
    selectAll: function(tableName, cb){

        var query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);            
        });
        
    },

    insertOne: function(tableName, columnName, values, cb) {
        var query = "INSERT INTO " + tableName;
        query += "(" + columnName.toString() + ")";
        query += "VALUES (" + printQuestionMarks(values.length) + ") ";
        
        connection.query(query, values, function (err, result){
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function(tableName, objectPairVals, condition, cb){
        var query = "UPDATE " + tableName;
        query += " SET " + objToSql(objectPairVals);
        query += " Where " + condition;

        connection.query(query, function(err, result){
            if (err) {
                throw err;
            }

            cb(result);
        })
    }
}

module.exports = orm;