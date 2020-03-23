load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each


s = newGlobal()
function f(code) {
    evalcx(code, s)
}
f("\
    c = [];\
    var x;\
    for each(z in[\
        x,,[],,new Number,,,,new Number,,,,new Number,new Number,[],\
        ,,,[],,new Number,,new Number,,[],new Number,[],,,,,,[],\
        new Number,,new Number,[],,[],,,,[],,[],,,,,,,,,[],[],,[],\
        [],[],,new Number,[],[],,[],,new Number,new Number,new Number,\
        new Number,new Number,,,new Number,new Number,,[],[],[],,,[],\
        [],[],new Number,,new Number,,,,,[],new Number,new Number,[],\
        [],[],[],,x,[]]\
    ) {\
        c = z\
    };\
");
f("c");
