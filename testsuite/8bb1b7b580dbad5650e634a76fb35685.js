load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
    quit();

evalInWorker(`
  function f() {
    fullcompartmentchecks(f);
  }
  try { f(); } catch(e) {}
`);
