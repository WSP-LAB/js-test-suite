load("201224b0d1c296b45befd2285e95dd42.js");
(Function("for (var a = 0; a < 6; a++) {\
        (function sum_indexing(b, c) {\
            return b.length == c ? 0 : b[c] + sum_indexing(b, c + 1)\
        })([(void 0), Infinity, Infinity], 0)\
}"))()

