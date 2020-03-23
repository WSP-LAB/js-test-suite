load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError; need-for-each

(function() {
  var a, b;
  for each (a in [{}, {__iterator__: function(){}}]) 
    for (b in a) { }
})();

