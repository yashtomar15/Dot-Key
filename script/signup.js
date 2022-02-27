document.querySelector("#form").addEventListener("submit", mySubmit);
var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
function mySubmit(event)
{
    event.preventDefault();
    var signupObj = {
        fisrtName:document.querySelector("#first").value,
        lastName:document.querySelector("#last").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#pass").value,
    };
    signupArr.push(signupObj);
    console.log(signupArr);
    localStorage.setItem("signUpDetails" , JSON.stringify(signupArr));
console.log(signupArr)
document.querySelector("input[type='submit']").addEventListener("click",function(){
    window.location.href = "login.html";
})
}