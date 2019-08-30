function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  var sum = 0;
  for (i = 0; i < arguments.length; i++) { 
    var item = arguments[i];
    item = item*item;
    sum += item; 
  }
  
  return Math.floor(Math.sqrt(sum)/2);
}

function unluckyDays(year){
	var blackFridays = 0;
	for (i = 0; i <= 11; i++) { 
	//Friday is the 5th week´s day
	blackFridays += new Date(year, i, 13).getDay() == 5 ? 1 : 0;
	}

	return blackFridays;
}

