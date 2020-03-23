load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

eval("\
  (function(){for(d in[0,Number]) {\
    this.__defineGetter__(\"\",function(){}),\
    [(this.__defineGetter__(\"x\",Math.pow))]\
  }})\
")()
delete gc
eval("\
  (function() {\
    for(e in this.__defineSetter__(\"x\",function(){})){}\
  })\
")()
delete gc

reportCompare(true, true, "don't crash");
