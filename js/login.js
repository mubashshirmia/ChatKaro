//code for toggele of login password
function mouseoverPass1(obj) {
var obj = document.getElementById('myPassword1');
obj.type = "text";
}
function mouseoutPass1(obj) {
var obj = document.getElementById('myPassword1');
obj.type = "password";
}


//code for toggle of sign Up password
function mouseoverPass2(obj) {
var obj = document.getElementById('myPassword2');
obj.type = "text";
}
function mouseoutPass2(obj) {
var obj = document.getElementById('myPassword2');
obj.type = "password";
}

//code for toggle of Sign Up confirm password
function mouseoverPass3(obj) {
var obj = document.getElementById('confPassword');
obj.type = "text";
}
function mouseoutPass3(obj) {
var obj = document.getElementById('confPassword');
obj.type = "password";
 }





//code for form validation
$(document).ready(function() {

// On Click SignIn Button Checks For Valid E-mail And All Field Should Be Filled
$("#loginto").click(function() {
var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
if ($("#loginemail").val() == '' || $("#myPassword1").val() == '') {
alert("Please fill all fields...!!!!!!");
} else if (!($("#loginemail").val()).match(email)) {
alert("Please enter valid Email...!!!!!!");
} 
else {
alert("You have successfully Logged in...!!!!!!");
$("form")[0].reset();
}
});
$("#register").click(function() {
var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
if ($("#name").val() == '' || $("#registeremail").val() == '' || $("#myPassword2").val() == '') {
alert("Please fill all fields...!!!!!!");
} else if (!($("#registeremail").val()).match(email)) {
alert("Please enter valid Email...!!!!!!");
} 
else if (!document.form2.terms.checked) {
alert("Please agree terms and condition first");
return false;
}

else {
alert("You have successfully Sign Up, Now you can login...!!!!!!");
$("#form")[0].reset();

$("#second").slideUp("slow", function() {
$("#first").slideDown("slow");
});
}
});
// On Click SignUp It Will Hide Login Form and Display Registration Form
$("#signup").click(function() {
$("#first").slideUp("slow", function() {
$("#second").slideDown("slow");
});
});
// On Click SignIn It Will Hide Registration Form and Display Login Form
$("#signin1").click(function() {
$("#second").slideUp("slow", function() {
$("#first").slideDown("slow");
});
});


// On Click SignIn It Will Hide Registration Form and Display Login Form
$("#signin2").click(function() {
$("#third").slideUp("slow", function() {
$("#first").slideDown("slow");
});
});



// On Click SignIn It Will Hide Registration Form and Display Login Form
$("#forgot").click(function() {
$("#first").slideUp("slow", function() {
$("#third").slideDown("slow");
});
});
});
