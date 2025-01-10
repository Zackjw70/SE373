const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/index", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"));
});

app.get("/todo", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "players.json"));
});

app.get("/read-todo", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "todo.html"));
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname,"public", "index.html"));
});


app.listen(PORT, ()=>{
    console.log("Server Running on Port 3000")
})