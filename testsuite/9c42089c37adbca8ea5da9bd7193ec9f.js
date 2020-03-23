load("e2371540d876710daf38e749390aa2a3.js");
description("Tests error messages to make sure that they're sane");

function parseTest(source)
{
    try {
        eval(source);
    } catch (e) {
        return e.message
    }
}

shouldBe("parseTest('0x')", "\"No hexadecimal digits after '0x'\"");
shouldBe("parseTest('0xg')", "\"No hexadecimal digits after '0x'\"");
shouldBe("parseTest('0x1.2')", "\"Unexpected number '.2'. Parse error.\"");
shouldBe("parseTest('0x1g')", "\"No space between hexadecimal literal and identifier\"");
shouldBe("parseTest('0x1in')", "\"No space between hexadecimal literal and identifier\"");


load("cf1a0efae1078faee510f7bda78d4902.js");
