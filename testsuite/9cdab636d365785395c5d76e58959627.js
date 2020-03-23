load("201224b0d1c296b45befd2285e95dd42.js");

function fna() {}
fna.prototype = undefined;
new fna;

function fnb() {}
fnb.prototype = null;
new fnb;

function fnc() {}
fnc.prototype = 3;
new fnc;

function fnd() {}
fnd.prototype = true;
new fnd;

function fne() {}
fne.prototype = "foo";
new fne;

function fnf() {}
fnf.prototype = /foo/;
new fnf;
