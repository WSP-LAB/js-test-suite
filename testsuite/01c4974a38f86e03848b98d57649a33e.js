load("201224b0d1c296b45befd2285e95dd42.js");
// OOM tests for module parsing.

if (!('oomTest' in this))
    quit();

load("6f4e4ba393ddba3c50ed7efa7b47592d.js");

const sa =
`export default 20;
 export let a = 22;
 export function f(x, y) { return x + y }
`;

const sb =
`import x from "a";
 import { a as y } from "a";
 import * as ns from "a";
 ns.f(x, y);
`;

oomTest(() => {
    let a = moduleRepo['a'] = parseModule(sa);
    let b = moduleRepo['b'] = parseModule(sb);
    b.declarationInstantiation();
    assertEq(b.evaluation(), 42);
});
