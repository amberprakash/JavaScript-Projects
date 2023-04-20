const a= document.getElementById("days");
const b= document.getElementById("hours");
const c= document.getElementById("mins");
const d= document.getElementById("seconds");

//console.log(a);

const newYear = "1 Jan 2024";

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function countdown(){
    const newYearsDate= new Date(newYear);
    const currentDate= new Date();
    
    const totalseconds= (newYearsDate - currentDate) /1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24; 
    const minutes = Math.floor(totalseconds / 60)  % 60;
    const seconds = Math.floor(totalseconds % 60);
    // console.log(days,hours,minutes,seconds);
    a.innerHTML = formatTime(days);
    b.innerHTML = formatTime(hours);
    c.innerHTML = formatTime(minutes);
    d.innerHTML = formatTime(seconds);

}

countdown();
setInterval(countdown,1000);
