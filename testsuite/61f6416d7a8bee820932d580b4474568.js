load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

var lines = `



"".replace([[2], 3])
`.split('\n');
var code = "";
while (true) {
    var line = lines.shift();
    if (line == null)
        break;
    loadFile();
    code += line + "\n";
}
loadFile(code);
function loadFile(code) {
    oomTest(() => eval(code));
}
