load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("557a2aa517df980b770aad6faed1c24d.js");
var BUGNUMBER = 1184922;
var summary = "Array destructuring with various default values in various context - yield expression";

print(BUGNUMBER + ": " + summary);

var opt = {
    no_plain: true,
    no_func: true,
    no_func_arg: true,
    no_gen_arg: true,
    no_ctor: true,
    no_derived_ctor: true,
    no_method: true,
    no_pre_super: true,
    no_comp: true,

    no_gen: false,
};
testDestructuringArrayDefault("yield 1", opt);

if (typeof reportCompare === "function")
  reportCompare(true, true);
