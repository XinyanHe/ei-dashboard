function out(msg, color) {
    var el = document.createElement("pre");
    if (color) el.style.cssText = "color:" + color + ";";
    el.innerHTML = msg;
    document.getElementById("output").appendChild(el);
    el.scrollIntoView();
}

function connect() {
    ws = new WebSocket("ws://SERVER_ADDRESS/dashboard/ws");
    ws.onopen = function (e) {
        out("<a onclick='connect()'>Connected</a>", "blue");
    };
    ws.onclose = function (e) {
        out("<a onclick='connect()' style='color:red'>Disconnected - Click to"
            + " reconnect</a>", "red");
    };
    ws.onmessage = function (e) {
        out(e.data.replace("<", "&lt;").replace(">", "&gt;"));
    };
    ws.onerror = function (e) { out("Error " + e.data, "red"); };
}

function cmd_out(msg, color) {
    var el = document.createElement("cmd_out");
    if (color) el.style.cssText = "color:" + color + ";";
    el.innerHTML = msg;
    document.getElementById("cmd_output").appendChild(el);
    el.scrollIntoView();
}

function execute() {
    ws = new WebSocket("ws://SERVER_ADDRESS/command/ws");
    ws.onopen = function (e) {
        cmd_out("<a onclick='execute()'>Connected</a>", "blue");
    };
    ws.onclose = function (e) {
        cmd_out("<a onclick='connect()' style='color:red'>Disconnected - Click to"
            + " reconnect</a>", "red");
    };
    ws.onmessage = function (e) {
        cmd_out(e.data.replace("<", "&lt;").replace(">", "&gt;"));
        result = JSON.parse(e.data).children
        console.log(result)
    };
    ws.onerror = function (e) { cmd_out("Error " + e.data, "red"); };
}

function send_level() {
    var el = document.getElementById("level_box");
    var level = el.options[el.selectedIndex].text;
    if (level) {
        console.log("Change level to " + level);
        ws.send(JSON.stringify({ "": level }));
        // Use "" as the logger name to get the root logger
    }
}

window.addEventListener("load", connect, false);