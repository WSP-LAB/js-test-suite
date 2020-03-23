load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

// Bug 1281131 - be sure to reserve enough stack space

wasmEvalText(
`(module
  (func $func0
   ${loopy(100)}
   (nop)))`);

function loopy(n) {
    if (n == 0)
	return "(nop)";
    return `(loop $out${n} $in${n} ${loopy(n-1)})`;
}
