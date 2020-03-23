load("201224b0d1c296b45befd2285e95dd42.js");
// GC in nested for-loops is safe.

var x;
for (x of new Set([1]))
    for (x of new Set([1]))
        for (x of new Set([1]))
            for (x of new Set([1]))
                for (x of new Set([1]))
                    for (x of new Set([1]))
                        for (x of new Set([1]))
                            for (x of new Set([1]))
                                for (x of new Set([1]))
                                    for (x of new Set([1]))
                                        for (x of new Set([1]))
                                            for (x of new Set([1]))
                                                for (x of new Set([1]))
                                                    for (x of new Set([1]))
                                                        for (x of new Set([1]))
                                                            for (x of new Set([1]))
                                                                gc();
