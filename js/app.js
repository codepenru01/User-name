let elForm = document.querySelector("form");

let userName = document.querySelector("#username");
let userPassword = document.querySelector("#userpassword");

let elTextName = document.querySelector(".username");
let elTextPassword = document.querySelector(".userpassword");

elForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let elInputVal = userName.value;
    let elInputPassVal = userPassword.value;

    elTextName.textContent = "UserName: " + elInputVal;
    elTextPassword.textContent = "UserPassword: " + elInputPassVal;
})