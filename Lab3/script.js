let btn = document.getElementById('btn');
btn.addEventListener('click', test);
let username = document.getElementById('username');
username.addEventListener('click', test);

function test(){
   
    let msg = document.getElementById('msg');
       let head = document.getElementsByTagName('h1')[0];

    let nameValue = username.value.trim();
    let words = nameValue.split(/\s+/);

    if(username.value == ""){
        msg.style.color = 'purple';
        msg.innerHTML = "please type username first";

    }  else if(words.length < 2){
        msg.style.color = 'purple';
        msg.innerHTML = "Name must be at least 2 words";
    }
    
    
else{
        head.style.color = 'purple';
        head.innerHTML = username.value;
        msg.innerHTML = "";
    }
}
