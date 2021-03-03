var storeData = require("../data/db.json");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(storeData);
        console.log(storeData);
    });

    app.post("/api/notes", function (req, res) {
        var your_uuid = uuidv4();
        
        
        storeData.push(req.body, your_uuid);
        res.json(true);

    });
};

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.