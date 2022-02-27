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

// first slide
var slide=document.querySelector("input")
if(slide.checked===false){
    var i=1;
    setInterval(function(){
        document.getElementById("radio"+i).checked=true;
        i++;
      if(i>5){
          i=1;
      }
    },3000)
}

// Second slide code

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length){
    slideIndex = 1
  }    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var proddata=JSON.parse(localStorage.getItem("prodslide"));

proddata.map(function displayprod(elm){
  var prodbox=document.createElement("div");
  prodbox.setAttribute("class","prodbox")
  var image=document.createElement("img");
  image.setAttribute("src",elm.img_url)
  var ratdiv=document.createElement("div")
  ratdiv.setAttribute("class","ratdiv")
  var star=document.createElement("span")
  star.setAttribute("class","fa fa-star checked")
  
  var rating=document.createElement("span")
  rating.innerText="4.8/5 (62)"
  rating.setAttribute("class","rating")
  var heart=document.createElement("span")
  heart.setAttribute("class","fa fa-heart-o")
  ratdiv.append(star,rating,heart);
  var name=document.createElement("p")
  name.innerText=elm.name;
  name.setAttribute("class","name")
  var price=document.createElement("p")
  price.innerText=elm.price;
  price.setAttribute("class","price")
  var button=document.createElement("button")
  button.innerText="ADD TO CART"
  button.setAttribute("class","button")
  prodbox.append(image,ratdiv,name,price,button)
  // prodcontain.append(prodbox)
document.querySelector(".prodslide").append(prodbox)
})

