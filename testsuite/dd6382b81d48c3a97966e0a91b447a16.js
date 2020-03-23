load("201224b0d1c296b45befd2285e95dd42.js");
function ack(m,n){
   if (m==0) { return n+1; }
   if (n==0) { return ack(m-1,1); }
   return ack(m-1, ack(m,n-1) );
}
assertEq(ack(3, 3), 61);
