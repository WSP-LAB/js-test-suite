load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function a(code) {
  var f = new Function("for each(let x in[false,'',/x/,'',{}]){if(x<x){(({}))}else if(x){}else{}}");
  try {
    f()
  } catch(e) {}
}
a()
a()

/* Don't crash (CLI only). */

