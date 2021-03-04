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

        const toDelete = parseInt(req.params.id);

        let totalNotes = notes.filter((note) =>note.id !== noteId);
        totalNotes.forEach((note) => delete note.id);
        let newId = totalNotes.map((note, index) => ({ id: index + 1, ...note }));
        
        let leftNotes = JSON.stringify(newId);
        let postPath = path.join(__dirname, "../data/db.json");
        fs.writeFile(postPath, leftNotes, (err) => {
            if (err){ throw err}
        });
        res.JSON(leftNotes);
      
    });
};
// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.