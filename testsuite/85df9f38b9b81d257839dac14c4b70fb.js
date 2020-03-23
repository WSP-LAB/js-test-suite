load("9ea6ef8d0280efd620f5247b330a30f1.js");
var logs = document.getElementById("logs");

function printResult(str) {
  console.log(str);
  logs.innerHTML += str + '<br>';
}

function printError(str) {
  console.log(str);
  logs.innerHTML += str + '<br>';
}

function printScore(str) {
  console.log(str);
  logs.innerHTML += str + '<br>';
}

window.onload = function() {
  console.log('Running benchmarks.');
  benchmarks.runAll({notifyResult: printResult,
                     notifyError:  printError,
                     notifyScore:  printScore}, true);
  printResult('Benchmarks completed.');
}
load("ebdfbee9d692c3f5771b75c1805d449f.js");
