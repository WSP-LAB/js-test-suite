load("201224b0d1c296b45befd2285e95dd42.js");
g = newGlobal();
Debugger(g).memory.trackingAllocationSites = true;
evaluate("function h() { 'use asm'; return {}}", { global: g });
