load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(x) { WScript.Echo(x+''); }

function inner(func) {
    print_(func.caller);
    if (func.arguments)
    {
        print_(func.arguments[0]);
        print_(func.arguments.caller);
    }
    if (func.caller) {
        if (func.arguments.caller) {
            print_(func.arguments.caller[0]);
        } else {
            print_("func.arguments.caller undefined");
        }
    }
    print_("");
}


function f() {
    inner(f);
    try {
        try {
            throw null;
        }
        finally {
            inner(g);
        }
    }
    catch (e) {
        inner(f);
    }
}

function g() {
    f("f from g");
}

f("f from global");
g("g from global");

function callerA() {
        AA(null);
}
function AA(x) {
        print_(AA.caller);
}

function callerB() {
        eval("AB(null)");
}
function AB(x) {
        print_(AB.caller);
}

callerA();
callerB();

(function() {
    print_(arguments.caller);
    print_(delete arguments.caller);
    print_(arguments.caller);
    arguments.caller = 0;
    print_(arguments.caller);
    function f() {
        print_(arguments.caller);
        print_(delete arguments.caller);
        print_(arguments.caller);
        arguments.caller = 0;
        print_(arguments.caller);
    }
    f();
})();

function test0(){
  var func0 = function(){
    var __loopvar1 = 0;
    while(((b <<= (arguments.caller && arguments.caller[1]) ? 3 : 1)) && __loopvar1 < 3) {
      __loopvar1++;
    }
  }
  var func2 = function(){
    func0(); 
  }
  var b = 1;
  function bar0 () {
      func2();
  }
  bar0(1, 1, 1); 
  WScript.Echo("b = " + (b|0));
};

// generate profile
test0(); 
test0(); 
