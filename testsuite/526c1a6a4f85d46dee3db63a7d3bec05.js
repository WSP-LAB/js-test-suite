load("201224b0d1c296b45befd2285e95dd42.js");
try {
    evalInWorker(`
        function f() { f(); }
        try { f(); } catch(e) {}
    `);
} catch(e) {
    assertEq(e.toString().includes("--no-threads"), true);
}
