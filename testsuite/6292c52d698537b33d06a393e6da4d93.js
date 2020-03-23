load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Memory.prototype.takeCensus breakdown: check error handling on
// property gets.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);

assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { get by() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");



assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'count', get count() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'count', get bytes() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");



assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'objectClass', get then() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'objectClass', get other() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");



assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'coarseType', get objects() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'coarseType', get scripts() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'coarseType', get strings() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'coarseType', get other() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");



assertThrowsValue(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'internalType', get then() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");
