load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; allow-unhandlable-oom
// Bug 1234402
// Unhandlable OOM in AlternativeGeneration::AlternativeGeneration.

if (typeof oomAfterAllocations == "function" && helperThreadCount() > 0) {
  offThreadCompileScript(`
[null, "", ""].forEach(function(locales) {
try {
Intl.NumberFormat(locales)
} catch (e) {}
oomAfterAllocations(100);
})
`);
  runOffThreadScript();
}
