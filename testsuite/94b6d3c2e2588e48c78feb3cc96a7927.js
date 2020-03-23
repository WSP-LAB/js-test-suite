load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
RegExp("(&)??\\1}").test("&D")
"xy".match(/((x)??){2}y/)
"\u66d6J".split(/((\u66d6)??){7}J/)
"2\"".match("(((2)??)+\")")()

