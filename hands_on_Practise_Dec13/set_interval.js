let second=0
let minutes=0
let hours=0
let setInterval_id=null;
let timer_callback=function (){
    if(second <59 ){
        second = second + 1;
          }
          else if (second ==59){
              second = 0;
              minutes = minutes+1; 
          }
          else if(minutes==59){
              minutes=0;
              hours=hour+11;
          }

        document.getElementById("seconds").innerHTML =second;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("hours").innerHTML=hours

    document.getElementById('timer_op').innerText=counter;
}
setInterval_id=setInterval(timer_callback,1000);

let pause_timer_btn=document.getElementById('stop_timer')
pause_timer_btn.addEventListener('click',function(){
    clearInterval(setInterval_id)
});

let resume_timer_btn_2=document.getElementById('resume_timer')
resume_timer_btn_2.addEventListener('click',function(){
    setInterval_id=setInterval(timer_callback,1000)
    this.innerText="resume"
})
let reset_timer_btn=document.getElementById('reset_timer')
reset_timer_btn.addEventListener('click',function(){
    clearInterval(setInterval_id)
    let second=0
    let minutes=0
    let hours=0
document.getElementById("seconds").innerHTML =second;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("hours").innerHTML=hours
setInterval_id=setInterval(timer_callback,1000)
    
})