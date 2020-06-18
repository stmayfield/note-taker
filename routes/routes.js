const path = require("path");
const db = require("../db/db.json")

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/api/notes", (req, res) => {
        return res.json(db);
    });

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        db.push(newNote)
        res.json(db)
    });


};



