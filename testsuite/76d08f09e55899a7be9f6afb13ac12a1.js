load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom
(function(){
  (x)=[1,2,3]
})()
try{
  (function(){
    ((function a(aaaaaa,bbbbbb){
      if(aaaaaa.length==bbbbbb){
        return eval%bbbbbb.valueOf()
      }
      cccccc=a(aaaaaa,bbbbbb+1)
      return cccccc._=x
    })([,,,,,,,,,,,,,,,,,,0],0))
  })()
}catch(e){}

/* Don't assert. */

