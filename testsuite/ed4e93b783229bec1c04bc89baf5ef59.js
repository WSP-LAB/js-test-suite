load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
if (!this.Promise) {
    this.reportCompare && reportCompare(true, true);
    quit(0);
}

// This just shouldn't trigger a failed assert.
// It does without bug 1288382 fixed.
Promise.all.call(class {
  constructor(exec){ exec(()=>{}, ()=>{}); }
  static resolve() { return {then(){}}; }
}, [null]);

this.reportCompare && reportCompare(true, true);
