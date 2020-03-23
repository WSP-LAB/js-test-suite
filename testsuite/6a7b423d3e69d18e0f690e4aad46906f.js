load("201224b0d1c296b45befd2285e95dd42.js");
function foo(aObject)
{
    try { }
    catch (ex if (ex.name == "TypeError")) { }
    try { Object.getPrototypeOf(aObject); }
    catch (ex) { }
}

foo(true);
