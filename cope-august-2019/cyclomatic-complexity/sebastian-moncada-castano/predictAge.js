//KATA A
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  var result=0;
  for (i = 0; i < arguments.length; i++) {
    result+=arguments[i]*arguments[i];
  }
  return Math.trunc(Math.sqrt(result)/2);
}