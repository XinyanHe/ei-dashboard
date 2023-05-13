const express = require('express')
const app = express()

var execSync = require('child_process').execSync;
var pipesTree = execSync(`ext/ei/scripts/ctl.sh 1 1 show_tree=pipes --format=json`, { cwd: '/home/hexy2045/pox', encoding: 'utf-8' });
var pipesTree2 = execSync(`ext/ei/scripts/ctl.sh 1 2 show_tree=pipes --format=json`, { cwd: '/home/hexy2045/pox', encoding: 'utf-8' });

var serviceModules = execSync(`ext/ei/scripts/ctl.sh 1 1 show_tree=servicemodules --format=json`, { cwd: '/home/hexy2045/pox', encoding: 'utf-8' });
var serviceModules2 = execSync(`ext/ei/scripts/ctl.sh 1 2 show_tree=servicemodules --format=json`, { cwd: '/home/hexy2045/pox', encoding: 'utf-8' });

var configModules = execSync(`ext/ei/scripts/ctl.sh 1 1 show_tree=config --format=json`, { cwd: '/home/hexy2045/pox', encoding: 'utf-8' });
var configModules2 = execSync(`ext/ei/scripts/ctl.sh 1 2 show_tree=config --format=json`, { cwd: '/home/hexy2045/pox', encoding: 'utf-8' });

var pipes = getCleanData(pipesTree).pipes.children;
console.log(pipes)
var pipes2 = getCleanData(pipesTree2).pipes.children;
var services = getCleanData(serviceModules).services.children;
var services2 = getCleanData(serviceModules2).services.children;
var config = getCleanData(configModules);
var config2 = getCleanData(configModules2);
console.log(getCleanData(configModules))
console.log(pipes)

function getCleanData(commandResult) {
    return JSON.parse(commandResult.split(/\r?\n/)[1]).children
}

const { spawn } = require('child_process');
const ls = spawn('service', ['--stdout']);
var result;

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);

    // Process `data` as you prefer, something like
    //
    //   if (data.includes('robot2')) {
    //     something()
    //   }
});

app.get("/api", (req, res) => {
    res.json({ "users": ["user1", "user2", "user3"] })
})

app.get("/pipes", (req, res) => {
    res.json({ "pipes": pipes, "services": services, "config": config })
})

app.get("/pipes_2", (req, res) => {
    res.json({ "pipes": pipes2, "services": services2, "config": config2 })
})

app.listen(1337, () => {
    console.log(`Listening on port 1337...`);
});