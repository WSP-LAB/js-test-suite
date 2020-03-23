load("201224b0d1c296b45befd2285e95dd42.js");
function m() {
 var d = 73;

 return (eval("\n\
   (function() {\n\
     return function() {\n\
       yield ((function() {\n\
         print(d);\n\
         return d\n\
       })())\n\
     } ();\n\
   })\n\
 "))();
}

m().next();
