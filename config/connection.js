// mySQL connection info with heroku code that handles the connection

var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "marzana",
        database: "burgers_db"
    });
};


connection.connect(function(err){
    if (err) {
        console.log("error connection: " + err.stack);
        return;
    }

    console.log("Connected as id " + connection.threadId);
    
})

module.exports = connection;