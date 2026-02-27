
function checkBlood(){

    let blood = document.getElementById("blood").value;
    let msg = document.getElementById("msg");

    if(blood === ""){
        msg.style.color = "red";
        msg.innerHTML = "Please select a blood group";
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Selected: " + blood;
    }
}


