var end =2;
var curr = 1;
var count = -1;
var step = count;
var answer;


while(curr<end && curr <end){ 
    count++;
    step = count * 8;
    curr += step;
}
var out = count;
var temp = 0;
if(end<curr){
    var start = curr-step+1;
    var diff = end - start;
    var side;
    if(diff-1 >0){
        temp = diff-1;
    }else if(diff-1 < 0){
        temp=Math.abs(diff-1);
    }
    while(temp-count>0){
        temp -= count;
        console.log(temp);
    }
    if(temp-count === 0){
        temp=0;
    }
    console.log("Temp " + temp);
    console.log("Out " + out);
    answer = out + temp;
    side = count*2+1;
    console.log("STEP"+step);
    console.log("Diff"+diff);
    console.log("Curr"+curr);
    console.log("Count"+count);
    console.log("start " + start);
    console.log("End " + end + " answer:" + answer);
    console.log("Side " + side);
}else{
    answer=count*2;
    console.log("End " + end + " answer:" + answer);
}