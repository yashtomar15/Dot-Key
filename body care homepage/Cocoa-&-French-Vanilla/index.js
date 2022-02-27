



function ChangeImg1() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_360x.jpg?v=1644862704"
}


function ChangeImg2() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_15_360x.jpg?v=1644862704"
}


function ChangeImg3() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_360x.jpg?v=1644862704"
}


function ChangeImg4() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_360x.jpg?v=1644862704"
}


function ChangeImg5() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_360x.jpg?v=1644862704"
}


function ChangeImg6() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_0e90978d-13d9-458e-86e9-6f8cc9b3633e_360x.jpg?v=1644862704"
}


function like() {

    var like = document.getElementById("like");

    if (like.innerText = "🤍") {
        like.innerText = "🖤"
    }
    else{
        like.innerText = "🤍"
    }
   
}

var regdUser = JSON.parse(localStorage.getItem("signUpDetails")) ;
console.log(regdUser);
document.querySelector("#form").addEventListener("submit",formSubmit);
 
var form = document.querySelector("#form");
function  formSubmit(event)
{
    event.preventDefault();
    var email = form.email.value;
    var pass = form.pass.value ;
    console.log(email,pass);
    var flag = false;
    for(var i = 0 ; i <regdUser.length ; i++)
    {
        if(regdUser[i].email == email && regdUser[i].password == pass)
        {
            flag = true;
            break;
        
        }
    }
    if(flag == true)
    {
        alert("login successfull");
        window.location.href = "index.html"
    }
    else{
        alert("wrong");
    }

}