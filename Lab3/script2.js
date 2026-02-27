let btn = document.querySelector("input[type='button']");
btn.addEventListener("click", Gender1);

function Gender1(){

    let msg = document.getElementById("msg2");

    let genders = document.getElementsByName("gender");

    let selected = false;

    for(let i = 0; i < genders.length; i++){
        if(genders[i].checked){
            selected = true;
            break;
        }
    }

    if(!selected){
        msg.style.color = "red";
        msg.innerHTML = "Please select a gender";
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Gender selected successfully";
    }
}