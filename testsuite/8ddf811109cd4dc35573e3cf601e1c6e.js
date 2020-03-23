load("201224b0d1c296b45befd2285e95dd42.js");
var BUGNUMBER = 96284;
var BUGNUMBER = "410725";
function iteratorToArray(iterator) {
    var result = [];
    for (var i in iterator) BUGNUMBER[result.length];
}
try { obj = { a: 1, }('["a", "b"]', iteratorToArray(), 'uneval(iteratorToArray(new Iterator(obj,true)))'); } catch (e) { }
