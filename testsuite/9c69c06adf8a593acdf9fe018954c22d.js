load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
if (!('oomTest' in this))
    a;

enableShellAllocationMetadataBuilder()
oomTest(() => {
  newGlobal()
})
gczeal(9, 1);
a;
