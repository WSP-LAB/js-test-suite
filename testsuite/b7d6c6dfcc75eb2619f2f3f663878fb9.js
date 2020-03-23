load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

oomTest(function() {
    eval("\
	function g() {\
	    \"use asm\";\
	    function f(d) {\
		d = +d;\
		print(.0 + d);\
	    }\
	}\
    ")
})
