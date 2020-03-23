load("201224b0d1c296b45befd2285e95dd42.js");

function writeHeaderToLog( string ) { }
var input = [ 0xfffffff0, 101 ];
var arr = new Uint32Array(input.length);
var expected = [ 0xffffffff, 101 ];
for (var i=0; i<arr.length; i++) {
  arr[i] = writeHeaderToLog[i] = expected[i] = i * 8;
}
