load("201224b0d1c296b45befd2285e95dd42.js");
assertEq(
    ""+new Proxy(
        {toString:() => "inner toString"},
        {get:(t, pk) => (pk === "toString" ? () => "proxy toString" : t[pk])}),
    "proxy toString")
assertEq(
    ""+new Proxy(
        {valueOf:() => "inner valueOf"},
        {get:(t, pk) => (pk === "valueOf" ? () => "proxy valueOf" : t[pk])}),
    "proxy valueOf")
