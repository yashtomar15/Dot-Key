var data=JSON.parse(localStorage.getItem("addCart"));
        console.log(data);
        var bagdiv = document.getElementById("parent")
        bagdiv.style.display = "none"
        function bag() {
            console.log(bagdiv)
            if(bagdiv.style.display != "none"){
                bagdiv.style.display = "none";
            }
            else{
                bagdiv.style.display = "block"
            }
        }

        var place=document.querySelector(".placedata")
        var tprice=0;
        data.map(function displayprod(elm){
            var image=document.createElement("img");
            image.setAttribute("src",elm.img);
            image.setAttribute("class","bagimage");
            var desp=document.createElement("p");
            desp.innerText=elm.title
            var price=document.createElement("p");
            price.innerText="Rs: 0.00"
            tprice+=Number(elm.price);
            document.querySelector(".showprod").append(image,desp);
            document.querySelector(".tprice").innerText("Rs: "+tprice);
        })