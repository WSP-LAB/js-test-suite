load("201224b0d1c296b45befd2285e95dd42.js");
// don't crash
var book = 'Ps';
var pattern =   "(?:"
+                   "(?:"
+                       "(?:"
+                           "(?:-|)"
+                           "\\s?"
+                       ")"
+                       "|"
+                   ")"
+                   " ?"
+                   "\\d+"
+                   "\\w?"
+               ")*";
var re = new RegExp(pattern);
'8:5-8'.match(re);
