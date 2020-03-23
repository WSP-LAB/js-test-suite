load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs detachArrayBuffer

var buf = new ArrayBuffer([1,2]);
var bufView = new DataView(buf);

detachArrayBuffer(buf);

assertThrowsInstanceOf(() => bufView.getInt8(0), TypeError);

if (typeof reportCompare === 'function')
    reportCompare(0, 0, "OK");
