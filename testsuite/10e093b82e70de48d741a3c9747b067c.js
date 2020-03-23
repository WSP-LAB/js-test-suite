load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-daefd30072a6-linux
// Flags:
//
function f(param) {
  var w;
  return eval("\
    (function(){\
      this.__defineGetter__(\"y\", function() { return ({\
        x: function(){ return w }()\
      }); })\
    });\
  ");
}
(f())();
(new Function("eval(\"y\")"))();
