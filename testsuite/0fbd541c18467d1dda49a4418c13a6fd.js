//@ runNoFTL; runNoLLInt; runFTLNoCJITValidate

"use strict";

var verbose = false;
load("aa32179a758b2d125d48583dca339009.js");
initialize();

(function test1() {
    function foo() {
        expectStack([foo, test1]);
    }
    
    function bar() {
        return foo();
    }

    function baz() {
        return bar();
    }
    
    baz();
})();

(function test2() {
    function foo() {
    }
    
    function bar() {
        return foo();
    }

    function baz() {
        return bar();
    }
    
    baz();
})();

(function test3() {
    function foo() {
        expectStack([foo, test3]);
    }
    
    function bar() {
        return foo();
    }

    function baz() {
        return bar();
    }
    
    baz();
})();


