const express = require("express");
const app = express();

app.use(express.json());

let logs = [];

app.post("/login", (req, res) => {
    logs.push({
        username: req.body.username,
        time: new Date(),
        device: req.headers["user-agent"]
    });

    res.send("Logged in");
});

app.get("/logs", (req, res) => {
    res.json(logs);
});

app.listen(3000, () => console.log("Running"));
