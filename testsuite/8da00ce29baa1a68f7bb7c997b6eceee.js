load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof oomAtAllocation === 'object') {
    var a = [];
    oomAtAllocation(1);
    try {
    	a.forEach();
    } catch (e) {
    }
    a.forEach(()=>1);
}
