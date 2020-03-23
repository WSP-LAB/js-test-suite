load("201224b0d1c296b45befd2285e95dd42.js");
evalcx("\
    let z = 'x';\
    for (var v of z) {\
        y = evaluate(\"Object.defineProperty(this,\\\"y\\\",\
                         {get:  function() {}}\
                    );\",\
               {catchTermination: true}\
        );\
    }",
    newGlobal('')
)

evalcx("\
    for (x = 0; x < 1; ++x) { \
        v = evaluate(\"gc\",{ \
        })\
    }\
", newGlobal(''));
