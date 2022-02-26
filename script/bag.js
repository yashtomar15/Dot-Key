  // this js for show & hide bag box
  var bagdiv = document.getElementById("parent")
  bagdiv.style.display = "none"
  function bag() {
      console.log(bagdiv)
      if (bagdiv.style.display != "none") {
          bagdiv.style.display = "none";
      }
      else {
          bagdiv.style.display = "block"
      }
  }
  // for show data 
  var data = JSON.parse(localStorage.getItem("addCart"))
  console.log(data.length)
  var totalPrice = 0
  var p = 0
  data.map(function (elem) {
      var maindiv = document.createElement("div")
      maindiv.setAttribute("class", "showprod")
      var img = document.createElement("img")
      img.setAttribute("src", elem.img)
      img.setAttribute("class", "bagimage")
      var desp = document.createElement("p")
      desp.innerText = elem.title;
      var price = document.createElement("p")
      price.innerHTML = "Rs: " + elem.price + ".00"
      totalPrice += elem.price
      p++
      var div = document.createElement("div")
      div.append(desp, price)
      maindiv.append(img, div)
      document.querySelector(".placedata").append(maindiv)
      if (data.length === p) {
          console.log("I m fire")
          var tp = document.createElement("p")
          tp.innerText = "Rs: " + totalPrice + ".00"
          document.querySelector(".total").append(tp)
      }

  })