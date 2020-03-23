load("201224b0d1c296b45befd2285e95dd42.js");
try {
    evalInWorker("evalInWorker('evalInWorker(\"assertEq(1, 1)\")')");
} catch(e) {
    assertEq(e.toString().includes("--no-threads"), true);
}
