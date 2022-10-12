const express = require('express')
const app = express()

var execSync = require('child_process').execSync;
var currentTag =  execSync(`git status`,{ encoding: 'utf-8' });

app.get("/api",(req,res) => {
    res.json({ "users": currentTag })
})

app.listen(5001, () => {
    console.log(`Listening on port...`);
});