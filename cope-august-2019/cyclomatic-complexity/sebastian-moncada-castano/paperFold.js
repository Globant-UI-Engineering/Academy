function* paperFold() {
  yield 1; 
  var start=[1];
  for (i = 1; i <=20; i++) {
    var auxPrev=1;
    for (j = 0; j<=start.length; j++) {
      yield start[j];
      start.push(start[j]);
      if(auxPrev==1){
       auxPrev=0;
     }else{
       auxPrev=1;
     }
     yield auxPrev;
     start.push(auxPrev); 
   }
 }
}