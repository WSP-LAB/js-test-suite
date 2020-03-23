load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom;
function startTest() {
 if (typeof document != "object" 
    || !document.location.href.match(/jsreftest.html/))  {}
};
gczeal(4);
startTest();
new ArrayBuffer( 8192 );
