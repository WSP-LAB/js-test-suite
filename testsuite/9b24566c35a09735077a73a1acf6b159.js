load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

if (globalPrototypeChainIsMutable())
    this.__proto__ = [];

if (!this.hasOwnProperty("TypedObject") || typeof minorgc !== 'function')
    quit();

var T = TypedObject;
var ObjectStruct = new T.StructType({f: T.Object});
var o = new ObjectStruct();

minorgc();

function writeObject(o, v) {
    o.f = v;
    assertEq(typeof o.f, "object");
}

for (var i = 0; i < 5; i++)
    writeObject(o, { toString: function() { return "helo"; } });
