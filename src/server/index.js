const express = require("express");
const os = require("os");
const app = express();
const PORT = 8080;

const listenCallback = (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`Listening on port ${PORT}!`);
};

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) => {
    const info = os.userInfo();

    console.log('req', req.query);

    if (req.query.name === 'tim') {
        return res.send({ username: info.username });
    }

    res.send({username: 'not found'});
});
app.listen(PORT, listenCallback);