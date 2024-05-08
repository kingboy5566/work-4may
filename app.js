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
document.write("Date"+"Month"+"Year" +now.getDate()+now.getMonth()+now.getFullYear()+"<br>" ) 
document.write("Month"+"date"+"year"+now.getMonth()+now.getDate()+now.getFullYear()+"<br>" )

document.write("<h5>Q:-3</h5>")

for (var year = 2024; year <= 2050; year ++){
 var date = new Date(year,0,1)
 if(date.getDay() === 0){
    document.write("1st january is sunday"+ " "+ year + "<br>")
 }
}

document.write("<h5>Q:-4</h5>")

var num = prompt("input a guss number")
var a = Math.floor(Math.random()*10)+1
if(num == a){
    document.write("Good Work")
}else if(num != a){
    document.write("Not Matched")
};

document.write("<h5>Q:-5</h5>"+"<br>")

 var today = new Date()
var agu = new Date(today.getFullYear(),7,14);
if(today.getMonth()==7 && today.getDate() > 14)
{agu.setFullYear(agu.getFullYear()+1)
}
var day = 1000*60*60*24;
document.write(Math.ceil((agu.getTime()-today.getTime())/(day))+"day left until 14 august");


document.write("<h5>Q:-6</h5>"+"<br>");

document.write("<h4>javaScript</h4>")
var java = "javaScript"

var fjava = java.slice(0,4);
var ljava = java.slice(5,)
var fullName = fjava+ljava
document.write(fullName+"<br>")

document.write("<h5>Q:-7</h5>"+"<br>");
var odd = prompt("3 or 7 ky odd or Even number nter kren ")

if(odd % 3 == 0 ||odd % 7 == 0  ){

 document.write("odd numer =====>"+ " true")
}else{
document.write("even numer =====>"+ " false")
}
document.write("<h5>Q:-8</h5>");

document.write("java Script"+"<br>")
var str = "java Script"
var chek = str.substring(0,4)
if( chek == "java"){
   document.write("true")
}else{
   document.write("false")
}

document.write("<h5>Q:-9</h5>"+"<br>");
function check(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

document.write(check(12, 101)+"<br>");

document.write(check(15, 99)+"<br>");


document.write("<h5>Q:-10</h5>"+"<br>");
function check(a,b,c) 
  {
  if ((a >= 50 && a <= 99) || (b >= 30 && b <= 99)||(c >= 20 && c <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

document.write(check(30, 20,15)+"<br>");
document.write(check(52, 80,25)+"<br>");
document.write(check(15, 99,35)+"<br>");

