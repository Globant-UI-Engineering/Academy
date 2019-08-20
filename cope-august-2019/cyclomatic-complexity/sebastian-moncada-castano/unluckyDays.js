// KATA B
function unluckyDays(year){
  var cont=0;
  for (i = 0; i<12; i++) {
      d=new Date(year,i,13)
      if(d.getDay()=='5'){
      cont++;
      }
  }
  return cont;
}
