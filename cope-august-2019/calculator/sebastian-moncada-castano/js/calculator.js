document.addEventListener("keyup",(event)=>{
	if(event.keyCode > 47 && event.keyCode<=57){
		printScreen(parseInt(event.key));
	}
	if(event.keyCode==187 || event.keyCode==189 || event.keyCode==55){
		printScreen(event.key);
	}
	if(event.keyCode==8){
		backSpace();
	}
	if(event.keyCode==13){
		operation();
	}
}); 

function printScreen(dig){
	var input=document.getElementById('input');
	console.log(dig);
	if(input.value.length==0){
		if(dig!=0)
		input.value+=dig;
	}else if(input.value.length>0){
		var oper=input.value.charAt(input.value.length - 1);
		
		if (Number.isInteger(dig)) {
			input.value+=dig;
			
		}else if(oper!="+"  &&  oper!="-"  && oper!="*" && oper!="/"){
			input.value+=dig;
		}
	}	
}

function operation(){
	var input=document.getElementById('input');
	if(input.value.length>0){
		oper=input.value.charAt(input.value.length - 1);
		if(oper!="+"  &&  oper!="-"  && oper!="*" && oper!="/"){
			document.getElementById('result').value=Math.floor(+eval(input.value));
		}
	}
}

function clearScreen(){
	document.getElementById('input').value="";
	document.getElementById('result').value="";
}

function backSpace(){
	var input=document.getElementById('input');
	if (input.value.length>0){
		input.value=input.value.substring(0,input.value.length-1);
	}
}
