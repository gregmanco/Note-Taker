// NPM Modules and Dependencies
var express = require("express")
var mysql = require("mysql")
var connection = require("./connection.js")
var path = require("path")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());






app.get("/api/notes", function (req, res){ 
    connection.query( "SELECT *  FROM notes;", function(err, data){
        if(err) {throw err
        }
        res.json(data)
    });
    });

app.post("/api/write_notes", function(req, res){
    
    connection.query("INSERT INTO notes (title,body) VALUES (?,?)", [req.body.title,req.body.body],function( err, res){
        if(err) {throw err
        }
        console.log("you inserted a new note");
    });
});

app.delete("/api/notes/:id",function(req, res){
    connection.query("DELETE FROM notes WHERE id = ?", [req.params.id], function(err, result) {
        if(err){ throw err
        // return res.status(500).end();
    }
    // else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   }
    //   res.status(200).end();

    });
});
// Route to Index.html
app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "index.html"))
})
// Route to Notes.html
app.get("/notes", function (req,res){
    res.sendFile(path.join(__dirname, "notes.html"))
})






app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
  
