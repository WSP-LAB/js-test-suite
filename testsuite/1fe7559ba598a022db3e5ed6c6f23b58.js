load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

var a = [];
var sort = a.sort.bind(a);
a.push(sort);
a.push(sort);
sort(sort);
