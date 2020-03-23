load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
    quit();

evalInWorker(`
var gTestcases = new Array();
typeof document != "object" || !document.location.href.match(/jsreftest.html/);
gczeal(4, 10);
f = ([a = class target extends b {}, b] = [void 0]) => {};
f()
`)
