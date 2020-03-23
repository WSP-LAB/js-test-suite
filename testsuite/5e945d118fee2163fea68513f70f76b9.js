load("201224b0d1c296b45befd2285e95dd42.js");
function jit(on)
{
  if (on && !options().match(/tracejit/)) { }
}
try { test(); } catch (e) {}
function test( 
 ) 
{
  for (var j=0;j<5;++j) { switch(1.1) { case 2: case NaN: } }
  jit(false);
  reportCompare('xxxxxxx'.test(new j('(x+)(x*)')));
}
