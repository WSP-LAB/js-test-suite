load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: SyntaxError

var hits = 0;
with(f_arg => constructor.f_arg([3, 4, 5], null)) var length = 257751;
let get = () => 4,
    hits = new Intl.Proxy([f_arg]),
    y = ($ERROR < 1970) ? 1969 : 1970;
