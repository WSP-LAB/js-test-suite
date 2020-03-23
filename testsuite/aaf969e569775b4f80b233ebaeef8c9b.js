load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function p() { }

function test()
{
  var counter = 0;

  function f(x) {
      try
      { 
        throw 42;
      }
      catch(e)
      { 
        assertEq(counter, 0);
        p(function(){x;});
        counter = 1;
      }
  }

  f(2);
  assertEq(counter, 1);
}

test();

reportCompare(0, 0, "ok");
