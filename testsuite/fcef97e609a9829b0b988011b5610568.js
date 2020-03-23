load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError

var lfLogBuffer = `
if (lfCodeBuffer) loadFile(lfCodeBuffer);
function loadFile(await ) {
    eval(lfVarx);
}
`;
lfLogBuffer = lfLogBuffer.split('\n');
var lfCodeBuffer = "";
while (true) {
    var line = lfLogBuffer.shift();
    if (line == null) {
        break;
    } else {
        lfCodeBuffer += line + "\n";
    }
}
if (lfCodeBuffer) loadFile(lfCodeBuffer);
function loadFile(lfVarx) {
    eval(lfVarx);
}
