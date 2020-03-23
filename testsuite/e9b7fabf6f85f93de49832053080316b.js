load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// The page loaded in the browser is jsreftest.html, which is located in
// js/src/tests. That makes Worker script URLs resolve relative to the wrong
// directory. workerDir is the workaround.
workerDir = (document.location.href.replace(/\/[^/?]*(\?.*)?$/, '/') +
             'js1_8_5/extensions/');

