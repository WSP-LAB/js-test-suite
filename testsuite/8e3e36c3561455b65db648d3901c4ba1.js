load("201224b0d1c296b45befd2285e95dd42.js");

JSON.parse('[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]', function(k, v) { return ""; });
str = "[";
for (i = 0; i < 2048; i++) str += "1,"
str += "1]";
JSON.parse(str);
