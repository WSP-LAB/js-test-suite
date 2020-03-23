load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
var log = "";

log += typeof f;

{
  log += f();

  function f() {
    return "f1";
  }
}

log += f();

function g() {
  log += typeof h;

  {
    log += h();

    function h() {
      return "h1";
    }
  }

  log += h();
}

g();

reportCompare(log, "undefinedf1f1undefinedh1h1");
