var now = new Date();

document.write("<h5>Q:-1</h5>")



var day = [ 'sun','mon', 'tue', 'wed', 'thu','fri', 'sat' ]; 
 var newday = day[now.getDay()];
document.write('Today is :' + " "+newday + '<br>');

var nowDate = new Date();
var hours = nowDate.getHours()
var mints = nowDate.getMinutes()
var second = nowDate.getSeconds()
if(hours >= 13 || hours ==23 || hours == 0 ){
    document.write(hours+" "+"PM" +" "+":"+mints+" "+":"+second);
   }else if (hours >=1 || hours <=12) {
     
   
     document.write(hours+"AM"+":"+mints+":"+second)
   };


   document.write("<h5>Q:-2</h5>")
   var now = new Date()
document.write("Date"+now.getDate()+ "/ " +"Month"+now.getMonth()+ " /" +"Year"+now.getFullYear()+"<br>" ) 
document.write("Month"+now.getMonth()+ "- " +"Date"+now.getDate()+ " -" +"Year"+now.getFullYear()+"<br>" )

document.write("<h5>Q:-3</h5>")
for (var year = 2024; year <= 2050; year ++){
 var date = new Date(year,0,1)
 if(date.getDay() === 0){
    document.write("1st january is sunday"+ " "+ year + "<br>")
 }
}

// document.write("<h5>Q:-4</h5>")
// var num = prompt("input a guss number")
// var a = Math.floor(Math.random()*10)+1
// if(num == a){
//     document.write("Good Work")
// }else if(num != a){
//     document.write("Not Matched")
// };

document.write("<h5>Q:-5</h5>"+"<br>")
 var today = new Date()
var agu = new Date(today.getFullYear(),7,14);
if(today.getMonth()==7 && today.getDate() > 14)
{agu.setFullYear(agu.getFullYear()+1)
}
var day = 1000*60*60*24;
document.write(Math.ceil((agu.getTime()-today.getTime())/(day))+"day left until agust")


