load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
function f() {
  var probeParam, probeBlock;
  let x = 'outside';

  try {
    throw [];
  } catch ([_ = probeParam = function() { return x; }]) {
    probeBlock = function() { return x; };
    let x = 'inside';
  }

  assertEq(probeBlock(), 'inside');
  assertEq(probeParam(), 'outside');
}

f();

if (typeof reportCompare === 'function')
  reportCompare(true, true);
