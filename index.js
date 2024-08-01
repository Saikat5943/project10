console.log("This is javascript tutorial");
//setTimeout---->Allows us to run the function once after the interval of time specified
//cleartimeout--->allows us to run the function repeatedly after the interval of time
function greet(name,byeText){
    console.log('Hello Good morning '+name+" "+byeText);
}
setTimeout(greet,7000,'saikat','Take care');
function displayTime(){
    time=new Date();
    console.log(time);
    document.getElementById('time').innerHTML=time;

}
setInterval(displayTime, 1000);