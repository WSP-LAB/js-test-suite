load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
"use strict"

var log = "";

function f() {
  return "f0";
}

log += f();

{
  log += f();

  function f() {
    return "f1";
  }

  log += f();
}

log += f();

function g() {
  function h() {
    return "h0";
  }

  log += h();

  {
    log += h();

    function h() {
      return "h1";
    }

    log += h();
  }

  log += h();
}

g();

reportCompare(log, "f0f1f1f0h0h1h1h0");
