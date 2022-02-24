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