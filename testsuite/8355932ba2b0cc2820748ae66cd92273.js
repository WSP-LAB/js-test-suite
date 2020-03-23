load("201224b0d1c296b45befd2285e95dd42.js");
low = high = newGlobal({
  principal: 5
})
high.low = low
high.eval("function a() { return saveStack(1, low) }")
set = eval("high.a()")
serialize(set)
