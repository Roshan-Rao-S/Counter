let count=0;

function clickmetoincrease(num){
    count+=num;
    document.getElementsByTagName("p")[0].innerHTML=count;
}