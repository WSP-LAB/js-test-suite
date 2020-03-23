load("201224b0d1c296b45befd2285e95dd42.js");
var OMIT = {};
var WRITABLES = [true, false, OMIT];
{
  var desc = {};
  function put(field, value) {
    return desc[field] = value;
  }
  WRITABLES.forEach(function(writable) {
    put("writable", writable)
  });
};
