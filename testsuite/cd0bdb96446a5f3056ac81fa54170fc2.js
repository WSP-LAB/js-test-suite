load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: sleep interval is not a number
sleep(0.001);
1;
sleep(0.1);
sleep(this);
