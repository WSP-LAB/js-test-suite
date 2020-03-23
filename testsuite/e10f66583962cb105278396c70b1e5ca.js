load("201224b0d1c296b45befd2285e95dd42.js");
(new Int8Array(3)).join();
[Math.abs, Math.abs].forEach(x => {
    try {
        Int8Array.prototype.join.call(x);
    } catch(e) {}
});
