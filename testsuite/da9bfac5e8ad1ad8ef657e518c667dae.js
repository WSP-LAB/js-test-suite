load("201224b0d1c296b45befd2285e95dd42.js");

var du = new Debugger();
if (typeof du.setupTraceLogger === "function" &&
    typeof oomTest === 'function')
{
    du.setupTraceLogger({
        Scripts: true
    })
    oomTest(() => function(){});
}
