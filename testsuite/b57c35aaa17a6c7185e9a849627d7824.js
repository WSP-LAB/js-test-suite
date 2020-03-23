load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

test();

function test()
{
  var counter = 0;
  function f(x,y) {
      try
      { 
        throw 42;
      }
      catch(e2)
      { 
        foo(function(){ return x; }| "9.2" && 5 || counter && e);
        ++counter;
      }
  }

  f(2, 1);
}

function foo(bar) { return ""+bar; }

reportCompare(0, 0, "ok");
