
function Form(){

let msg = document.getElementById("msg");

//name
let name = document.getElementById("name").value.trim();
let words = name.split(/\s+/);

if(name==="" || words.length<2){
msg.innerHTML="Name must be at least 2 words";
return false;
}

// EMAIL 
let email=document.getElementById("email").value.trim();
let pattern=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;

if(!pattern.test(email)){
msg.innerHTML="Enter valid gmail address";
return false;
}

// GENDER
let genders=document.getElementsByName("gender");
let selected=false;

for(let g of genders){
if(g.checked) selected=true;
}

if(!selected){
msg.innerHTML="Select gender";
return false;
}

// DOB
let d=document.getElementById("day").value;
let m=document.getElementById("month").value;
let y=document.getElementById("year").value;

if(isNaN(d)||isNaN(m)||isNaN(y)||d===""||m===""||y===""){
msg.innerHTML="DOB must be numbers";
return false;
}

d=parseInt(d); m=parseInt(m); y=parseInt(y);

if(d<1||d>31||m<1||m>12||y<1900||y>new Date().getFullYear()){
msg.innerHTML="Invalid date";
return false;
}

// BLOOD GROUP
let blood=document.getElementById("blood").value;
if(blood===""){
msg.innerHTML="Select blood group";
return false;
}

// DEGREE
let degrees=document.getElementsByName("degree");
let checked=false;

for(let d of degrees){
if(d.checked) checked=true;
}

if(!checked){
msg.innerHTML="Select at least one degree";
return false;
}

// PHOTO
let photo=document.getElementById("photo").value;
if(photo===""){
msg.innerHTML="Upload photo";
return false;
}

msg.style.color="green";
msg.innerHTML="Form submitted successfully!";
return false;
}
