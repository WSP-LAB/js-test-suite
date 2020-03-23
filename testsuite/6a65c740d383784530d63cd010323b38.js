load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// @@unscopables prevents a property from having any effect on assigning to a
// const binding (which is an error).

const x = 1;
with ({x: 1, [Symbol.unscopables]: {x: true}})
    assertThrowsInstanceOf(() => {x = 2;}, TypeError);

reportCompare(0, 0);
