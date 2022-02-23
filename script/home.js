var data=JSON.parse(localStorage.getItem("primeprod"));
// console.log(data);

data.map(function displaydata(elm){
    var box=document.createElement("div")
    var image=document.createElement("img")
    image.setAttribute("src",elm.img_Url);
    image.setAttribute("class","images");
    var name=document.createElement("div")
    name.setAttribute("class","prodtext")
    name.innerText=elm.name;
    box.append(image,name);
    box.addEventListener("click",bodycare)
    function bodycare(event){
        location.href="bodycare.html"
    }
    document.querySelector("#primeproduct").append(box);
})

var slidedata=JSON.parse(localStorage.getItem("slideimage"))
// console.log(slidedata);

var i=1;
setInterval(function(){
    document.getElementById("radio"+i).checked=true;
    i++;
  if(i>5){
      i=1;
  }
},3000)
