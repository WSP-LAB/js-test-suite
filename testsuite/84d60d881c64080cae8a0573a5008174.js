load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption("ion.warmup.trigger", 4);
var lfLogBuffer = `
function logProxy(object = {}, handler = {}) {
    var log = [];
    var proxy = new WeakMap(object, new Proxy(handler, {
        get(proto) {
            log.push(propertyKey);
        }
    }));
}
var {proxy, log} = logProxy();
`;
loadFile(lfLogBuffer);
loadFile(lfLogBuffer);
loadFile(lfLogBuffer);
function loadFile(lfVarx) {
    try {
      function newFunc(x) {
        new Function(x)();
      };
      newFunc(lfVarx);
    } catch (lfVare) {}
}
