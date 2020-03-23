load("201224b0d1c296b45befd2285e95dd42.js");
/* Don't trip bogus assert. */

function e()
{
    try
    {
        var t = undefined;
    }
    catch (e)
    {
        var t = null;
    }
    while (t && (t.tagName.toUpperCase() != "BODY"))
        continue;
}
for (var i = 0; i < 20; i++)
  e();
