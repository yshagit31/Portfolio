
var typed = new Typed(".movingtext", {
  strings: [ "Frontend Web Developer."],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 100,
  loop: false,
});

  document.getElementById("locationIcon").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Open the location in a new tab or window
    var locationURL = "https://www.google.com/maps/place/JSSATE+BOYS+HOSTEL,+Reflex+Housing+Layout,+Hemmigepura+Ward+198,+Rajarajeshwari+Nagar,+Bengaluru,+Karnataka+560098/@12.9047395,77.5065426,17z/data=!4m6!3m5!1s0x3bae3f0fbc70160d:0xdf72550b78bf1e00!8m2!3d12.9048806!4d77.5065814!16s%2Fg%2F11n6spz5zh";
    window.open(locationURL, "_blank");
  });

var number=document.getElementsByClassName("percent1");
var numbe=document.getElementsByClassName("percent2");
var numb=document.getElementsByClassName("percent3");
var num=document.getElementsByClassName("percent4");

var i=0;
let a=setInterval(function()
{
  if(i==81){
    clearInterval(a);
  }
  else
  {
    number[0].innerHTML=i+"%";
    i++;
  }
},8);

var i2=0;
 b=setInterval(function()
{
  if(i2==75){
    clearInterval(b);
  }
  else
  {
    i2++;
    numbe[0].innerHTML=i2 +"%";
    
  }
},8);

var i3=0;
 c=setInterval(function()
{
  if(i3>70){
    clearInterval(c);
  }
  else
  {
    numb[0].innerHTML=i3 +"%";
    i3++;
  }
},8);

var i4=0;
 d=setInterval(function()
{
  if(i4>85){
    clearInterval();
  }
  else
  {
    num[0].innerHTML=i4 +"%";
    i4++;
  }
},6);

// --------------nav bar-----------

var menu=document.getElementById("side-bar");
function openmenu()
{
  menu.style.right="0px";
}
function closemenu()
{
  menu.style.right="-200px";
}






