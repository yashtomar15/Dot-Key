var menubar= document.getElementById("menu")
var menuShow= document.getElementById("menuShow")
var menuClose= document.getElementById("menuClose")
function hideToggle(){
    if((menubar.style.display!="flex")&&(menuShow.style.display="block")){
       menubar.style.display="flex";
       menuShow.style.display="none"
       menuClose.style.display="block"
       menuClose.style.width="30px"
        
    }else{
        menuShow.style.display="block"
        menubar.style.display="none"
        menuClose.style.display="none"
    }
    var div=document.createElement
   
}