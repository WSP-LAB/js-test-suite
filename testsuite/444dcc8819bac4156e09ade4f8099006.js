load("201224b0d1c296b45befd2285e95dd42.js");
const global = newGlobal();
const OtherPromise = global.Promise;
class SubPromise extends OtherPromise {}

assertEq(true, new SubPromise(()=>{}) instanceof OtherPromise);
assertEq(true, SubPromise.resolve({}) instanceof OtherPromise);
assertEq(true, SubPromise.reject({}) instanceof OtherPromise);
assertEq(true, SubPromise.resolve({}).then(()=>{}, ()=>{}) instanceof OtherPromise);
