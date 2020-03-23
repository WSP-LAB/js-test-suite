load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base { constructor() { } }

class inst extends base { constructor() { super(); } }
Object.setPrototypeOf(inst, Math.sin);
assertThrowsInstanceOf(() => new inst(), TypeError);

class defaultInst extends base { }
Object.setPrototypeOf(inst, Math.sin);
assertThrowsInstanceOf(() => new inst(), TypeError);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
