load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

try { eval("\
    function a(y){y.x}\
    for each(let d in[\
        ({}),({}),({}),({}),({}),({}),({}),({}),({}),({})\
    ]){\
        try{\
            a(d)\
        }catch(e){}\
    }\
    n\
") } catch (e) {}
