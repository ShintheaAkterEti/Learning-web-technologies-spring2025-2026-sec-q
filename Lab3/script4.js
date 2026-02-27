let btn = document.querySelector("input[type='button']");
btn.addEventListener("click", Degree1);

function Degree1(){

    let msg = document.getElementById("msg3");

    let degree1 = document.getElementsByName("degree");

    let selected = false;

    for(let i = 0; i < degree1.length; i++){
        if(degree1[i].checked){
            selected = true;
            break;
        }
    }

    if(!selected){
        msg.style.color = "red";
        msg.innerHTML = "Please select a Degree";
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "degree selected successfully";
    }
}