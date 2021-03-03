var storeData = require("../data/storeData");

module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(storeData)
    });

};