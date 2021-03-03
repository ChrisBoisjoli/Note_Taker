var storeData = require("../data/db.json");

module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(storeData)
    });

    app.post("/api/notes", function (req, res) {

        storeData.push(req.body);
        res.json(true);

    });
};

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.