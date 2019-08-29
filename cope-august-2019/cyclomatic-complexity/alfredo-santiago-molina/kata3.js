function* paperFold() {
    let seq = [1];
    let num = 1;
    let iteration = 20;
    let index = 1;
    let temp = [];
    while (index < iteration){    
        temp = [1];
        seq.forEach((item)=>{
            temp.push(item);
            num = (num == 1) ? 0 : 1;
            temp.push(num);
        });
        num = 1;
        seq = temp;
        index++;
    }
    for(let i=0;i<seq.length;i++){
        yield seq[i];
    }
}
