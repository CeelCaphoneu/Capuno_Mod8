var gender;
var name = prompt("Give name");
var username = prompt("Username");

alert("How about your gender?");
var gender_affirm = confirm("Press ok for boy and press cancel for girl");
if (gender_affirm == true){
	gender = "Profile set to Boy";
}else{
	gender = "Profile set to Girl"
}

var desc = prompt("What can u say about urself");

var birthyear = prompt("Year of birth"); 
let year = Number(birthyear);
let year_a = 2023 - year;

var pfp;
alert("Do u want to customize ur PFP?");
var pfp_affirm = confirm("Press okay to proceed and cancel to exit");
if (pfp_affirm == true){
	pfp = prompt("Copy PFP link");
}else{
	pfp = prof.png;
}

document.getElementById("fname").innerHTML = name;
document.getElementById("gender").innerHTML = gender;
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = desc;
document.getElementById("ppic").src = pfp;
document.getElementById("year").innerHTML = birthyear;
document.getElementById("age").innerHTML = year_a;