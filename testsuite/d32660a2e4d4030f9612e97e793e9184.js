load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
assertThrowsInstanceOf(() => ArrayBuffer(), TypeError);
assertThrowsInstanceOf(() => ArrayBuffer(1), TypeError);
assertThrowsInstanceOf(() => ArrayBuffer.call(null), TypeError);
assertThrowsInstanceOf(() => ArrayBuffer.apply(null, []), TypeError);
assertThrowsInstanceOf(() => Reflect.apply(ArrayBuffer, null, []), TypeError);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
