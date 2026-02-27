let btn1 = document.getElementById('btn1');
let email = document.getElementById('email');

btn1.addEventListener('click', test1);
email.addEventListener('keyup', test1);



function test1(){
    let msg1 = document.getElementById('msg1');
    let head = document.getElementsByTagName('h2')[0];

    let emailValue = email.value.trim();

    let pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(emailValue === ""){
        msg1.style.color = 'purple';
        msg1.innerHTML = "Please type email first";
    }
    else if(!pattern.test(emailValue)){
        msg1.style.color = 'purple';
        msg1.innerHTML = "Enter valid email like something@gmail.com";
    }
    else{
        head.style.color = 'purple';
        head.innerHTML = emailValue;
        msg1.innerHTML = "";
    }
}