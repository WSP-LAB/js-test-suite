load("201224b0d1c296b45befd2285e95dd42.js");
if (!this.hasOwnProperty("TypedObject"))
    quit();

Function.prototype.prototype = function() {}

var type = TypedObject.uint8.array(4).array(4);
var x = new type([
    [, , , 0],
    [, , , 0],
    [, , , 0],
    [, , , 0]
]);

x.map(2, function(y) {
    return 0;
});