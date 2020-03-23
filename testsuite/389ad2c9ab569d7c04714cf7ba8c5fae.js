load("201224b0d1c296b45befd2285e95dd42.js");
evalcx("\
  Object.defineProperty(this, \"a\", {});\
  f = (function(j) {\
	  a = Proxy\
  });\
  Object.defineProperty(this, \"g\", {\
	  get: function() {\
		  return ({\
			  r: function() {},\
			  t: function() {}\
		  })\
	  }\
  });\
  for (p in g) {\
	  f(1)\
  }\
", newGlobal())
