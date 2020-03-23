load("e2371540d876710daf38e749390aa2a3.js");
description(
"This test checks that function declarations are treated as statements."
);

function f()
{
    return false;
}

function ifTest()
{
    if (true)
        function f()
        {
            return true;
        }

    return f();
}

shouldBeTrue("ifTest()");

function ifElseTest()
{
    if (false)
        return false;
    else
        function f()
        {
            return true;
        }

    return f();
}

shouldBeTrue("ifElseTest()");

function labelTest()
{
    label:
        function f()
        {
            return true;
        }

    return f();
}

shouldBeTrue("labelTest()");

load("cf1a0efae1078faee510f7bda78d4902.js");
