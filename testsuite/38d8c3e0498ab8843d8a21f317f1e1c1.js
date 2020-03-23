load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

var params = '';
var locals = '';
for (let i = 0; i < 20; i++) {
    params += '(param i64) ';
    locals += `(get_local ${i}) `;
}

wasmEvalText(`
(module
    (func
        ${params}
        (call 0 ${locals})
    )
)
`);
