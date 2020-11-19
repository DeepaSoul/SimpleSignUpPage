const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_up_submit = document.querySelector("#sign-up-submit");
const sign_in_submit = document.querySelector("#sign-in-submit");
const container = document.querySelector(".container");
var ErrorLog = ""

//Add the Class sign up so we can transition to the sign up screen
sign_up_btn.addEventListener("click", (e) => {
  container.classList.add("sign-up-mode");
});

//Remove the Class sign up so we can transition to the sign in screen
sign_in_btn.addEventListener("click", (e) => {
  e.preventDefault()
  container.classList.remove("sign-up-mode");
});

//Validate form fields
sign_up_submit.addEventListener("click", (e) => {
  e.preventDefault()
  var x = document.forms["signUpForm"]["phoneNum"].value;
  console.log(x.match(/[^A-Za-z0-9\-_]/))

  // if(){

  // }

});

sign_in_submit.addEventListener("click", (e) => {
  e.preventDefault()
});

validateField = (type, value, name) => {
  if(type == "email"){
    // [a-z]
  }else if(type == "tel"){

    value.includes()

  }else{
    value === "" ? ErrorLog + `${name} field must be field in.` : null
  }
}
