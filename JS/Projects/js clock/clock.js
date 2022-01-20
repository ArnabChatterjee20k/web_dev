// in a clock 

// Hour hand 
// 12hr means 360 degree rotation

// 12hr  => 360
// 1hr=> 360/12= 30 degree
// for h hour, 30h degree

// 60min =1hr => 30degree
// 1min= 30/60 = 1/2 degree
// for m imns, m/2 deg 

// 60sec = 1min = 1/2degree
// 1sec = 1/(2*60)deg

// When 3 clocks hand work some extra rotation is their as the hour hand is little bit forwaded due to min and sec.

// hour hand will rotate by (30h+(m/2))degree. Degree due to seconds can also be added but it will be too much negligible. 
// When 1hr passes some extra rotation is also their due to minutes and seconds. SO they are also added here but rotation due to seconds is negligible so avoided



// Min hand
// 60 min = 360 deg
// 1min = 6deg 
// m min= 6m deg.   Here movement/rotation due to change in seconds is avoided as it is neglible. Actually it is 
// 6m + rotation due to change in seconds. 


//second hand
// 60sec= 360 degree rotation
// 1sec= 6 degree
// for s sec, 6s degree
// let time;
//     time=setInterval(() => {
//     date=new Date();
//     htime= date.getHours() ;
//     mtime= date.getMinutes() ;
//     stime=date.getSeconds()  ;

//     hrotat= 30*htime+mtime/2;
//     mrotat= 6*mtime;
//     srotat=6*stime;

//     hour.style.transform = `rotate(${hrotat}deg)`;
//     min.style.transform = `rotate(${mrotat}deg)`;
//     sec.style.transform = `rotate(${srotat}deg)`;
   
// }, 1000);

// document.getElementById("btn").addEventListener("click",function(){
//     clearInterval(time);
//     console.log(date)
//     alert(document.getElementById("hr_inp").value)
//     b=setInterval(() => {
//         // since due to clear out the previous interval stopped so again asigning the Date to date
//         date=new Date();
//         console.log(date)
//         htime=date.getHours()+2;
//         // htime=date.getHours()+ document.getElementById("hr_inp").value;
//         console.log(htime);
//         mtime= date.getMinutes() ;
//         stime=date.getSeconds()  ;
//         hrotat= 30*htime+mtime/2;
//         mrotat= 6*mtime;
//         srotat=6*stime;
//         hour.style.transform = `rotate(${hrotat}deg)`;
//         min.style.transform = `rotate(${mrotat}deg)`;
//         sec.style.transform = `rotate(${srotat}deg)`;
//     }, 1000);
// })



let date=new Date();
function time(hr=date.getHours(),minute=date.getMinutes(),second=date.getSeconds()){
    date=new Date();
    hrotat= 30*hr+minute/2;
    mrotat= 6*minute;
    srotat=6*second;
    hour.style.transform = `rotate(${hrotat}deg)`;
    min.style.transform = `rotate(${mrotat}deg)`;
    sec.style.transform = `rotate(${srotat}deg)`;
}
let new_time=setInterval(time, 1000);

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(new_time);
    
})