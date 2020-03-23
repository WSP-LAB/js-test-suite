load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: uncaught exception:
evalcx("\
    try {\
        throw\"\"\
    } catch (\
        x if (function(){\
            x\
        })()\
    ) {}\
", newGlobal(""))

