load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// #1
function base() { }

base.prototype = {
    test() {
        --super[1];
    }
}

var d = new base();
d.test();

// #2
class test2 {
    test() {
        super[1]++;
    }
}

var d = new test2();
d.test()

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
