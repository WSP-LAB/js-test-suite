load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof offThreadCompileScript !== 'function' ||
    typeof runOffThreadScript !== 'function' ||
    typeof oomTest !== 'function' ||
    typeof fullcompartmentchecks !== 'function' ||
    helperThreadCount() === 0)
{
    quit(0);
}

offThreadCompileScript(`
 oomTest(() => "".search(/d/));
 fullcompartmentchecks(3);
`);
runOffThreadScript();
