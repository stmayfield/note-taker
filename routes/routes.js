const path = require("path");
const fs = require("fs");
const db = require("../db/db.json");
const app = require("express").Router();



// HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// API
app.get("/api/notes", (req, res) => {
    console.log(req.body)
    return res.json(db);
});

app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    console.log(newNote)
    db.push(newNote)



    for (let i = 0; i < db.length; i++) {
        let noteID = db[i];
        console.log(noteID)
    }
    return res.json(db)

});





app.delete("/api/notes/:id", (req, res) => {
    let newNote = req.body;
    const id = req.params.id;
    console.log(id)
    db.remove({ id: id }, res.json(db))
});


module.exports = app;


