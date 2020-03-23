load("201224b0d1c296b45befd2285e95dd42.js");
test();
function test()
{
  try {
    instances = []
    for (var i = 0; i != 2; ++i) 
    instances[i]=constructor
    var i = 0;
    var instance = instances[i];
    var name = instance.name;
    for (var j = 1; j != instances; ++j) 
    if (i != j && instance instanceof name[j].constructor) {}
  } catch(ex) {}
}
test();
