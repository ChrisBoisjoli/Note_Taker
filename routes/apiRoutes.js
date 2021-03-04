var storeData = require("../data/db.json");
const { v4: uuidv4 } = require('uuid');
const noteID = uuidv4();
const fs = require("fs");

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

    });
    app.delete("api/notes/:id", function (req, res){
        const deleteNoteID = req.params.id;
        for (let i = 0; i < noteData.length; i++) {
            if (storeData[i].id === deleteNoteID) {
                storeData.splice(i, 1);
            }
        }
            

      
    });
};
// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.