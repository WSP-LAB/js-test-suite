load("201224b0d1c296b45befd2285e95dd42.js");
function Employee(name, dept) { return this.name = name || ""; }
function WorkerBee(name, dept, projs) {
    this.base = Employee
    this.base(name, dept)
}
function Engineer(name, projs, machine) {
    this.base = WorkerBee
    this.base(name, "engineering", projs)
    __proto__["a" + constructor] = 1
}
new Engineer;
