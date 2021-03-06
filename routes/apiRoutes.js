var storeData = require("../data/db.json");
const { v4: uuidv4 } = require('uuid');
const noteID = uuidv4();
const fs = require("fs");
const { json } = require("express");
const { dirname } = require("path");

module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(storeData);
        console.log(storeData);
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNote.id = uuidv4();
        storeData.push(newNote);
        res.json(newNote);

        let notepad = json.stringify(newNote);

        fs.writeFile(storeData, notepad, (err) => {
            if (err){ throw err}
        });


    });

    
    app.delete("api/notes/:id", function (req, res){
        const idToDelete = req.params.id; 

        const newData = storeData;
        console.log(idToDelete,"\n", newData);

        const result = newData.filter(record => record.id !== idToDelete);

        toDelete.splice(1, id);
        console.log(result);
      
        res.send("still testing");

        //postman delete route 
    });
};
// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.