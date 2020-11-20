const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_up_submit = document.querySelector("#sign-up-submit");
const sign_in_submit = document.querySelector("#sign-in-submit");
const container = document.querySelector(".container");

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
  e.preventDefault();
  if(!validateField("tel", document.forms["signUpForm"]["phoneNum"].value, "phoneNum").success) document.querySelector(".phoneNum").classList.add("error");
if(!validateField("tel", document.forms["signUpForm"]["fname"].value, "Name").success) document.querySelector(".fname").classList.add("error");
if(!validateField("tel", document.forms["signUpForm"]["lname"].value, "Last Name").success) document.querySelector(".lname").classList.add("error");
if(!validateField("tel", document.forms["signUpForm"]["email"].value, "email").success) document.querySelector(".email").classList.add("error");
});

sign_in_submit.addEventListener("click", (e) => {
  e.preventDefault()
});

//Field validation function, with error log message.
validateField = (type, value, name) => {
var result: {
success: true,
msg: "Data Valid."
}
  if(type == "email"){
    // [a-z]
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
result = {
success: false,
msg: "Email Structure incorrect."
}
    }
  }else if(type == "tel"){
  if(!(value.match(/^\d{10}$/)){
    result = {
    success: false,
    msg: "Phone not correct Structure incorrect."
    }
    }

  }else{
    value === "" ? 
    result = {
        success: false,
        msg: `${name} field must be field in.`
    } : null
  }
}
