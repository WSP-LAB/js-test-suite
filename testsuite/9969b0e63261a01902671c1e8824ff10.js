load("201224b0d1c296b45befd2285e95dd42.js");
function RunSingleBenchmark(data) {
    if (data == null)
        return { runs: 0, elapsed: 0 };
    data.runs += 10;
    return data;
}
var data;
data = RunSingleBenchmark(data);
data = RunSingleBenchmark(data);
assertEq(data.runs, 10);