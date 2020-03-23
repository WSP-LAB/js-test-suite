load("201224b0d1c296b45befd2285e95dd42.js");
load("dc4b20628140c803c89c741458a4c2d0.js");
assertEqArray(/(?:(?:(")(c)")?)*/.exec('"c"'), [ '"c"', '"', "c" ]);
assertEqArray(/(?:(?:a*?(")(c)")?)*/.exec('"c"'), [ '"c"', '"', "c" ]);
assertEqArray(/<script\s*(?![^>]*type=['"]?(?:dojo\/|text\/html\b))(?:[^>]*?(?:src=(['"]?)([^>]*?)\1[^>]*)?)*>([\s\S]*?)<\/script>/gi.exec('<script type="text/javascript" src="..."></script>'), ['<script type="text/javascript" src="..."></script>', '"', "...", ""]);
