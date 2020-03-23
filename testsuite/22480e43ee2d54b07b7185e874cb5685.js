load("e2371540d876710daf38e749390aa2a3.js");
description(
"Regression test for https://webkit.org/b/140579. This test should run without crashing."
);

function Test(maxCount)
{
    this.dummy = eval("0");

    this.isString = function(v) {
        return (typeof v == "string" || v instanceof String);
    };

    this.test = function()
    {
        var count = eval("0");
        var s = "abc";

        for (var i = 0; i < maxCount; i++) {
            if (i == 4500) {
                s = new String("xyz"); // Cause a BadType OSR exit in isString()
		eval("var x = 3;");  // Fire var injection watchpoint
	    }

            if (this.isString(s))
                count++;
        }

        return count;
    };
}

o = new Test(5000);

shouldBeTrue("o.test() == 5000");
 

load("cf1a0efae1078faee510f7bda78d4902.js");
