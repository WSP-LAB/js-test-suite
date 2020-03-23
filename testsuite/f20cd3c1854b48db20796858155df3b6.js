load("201224b0d1c296b45befd2285e95dd42.js");

if (typeof TypedObject === "undefined")
    quit();

// Make sure some builtin TypedObject functions are given sensible names.
assertEq(TypedObject.ArrayType.name, "ArrayType");
assertEq(TypedObject.StructType.name, "StructType");
assertEq(TypedObject.storage.name, "storage");
