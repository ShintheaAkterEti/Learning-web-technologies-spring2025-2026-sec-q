function Profile(){

    let user = document.getElementById("userid").value.trim();
    let pic = document.getElementById("picture").value;
    let msg = document.getElementById("msg");

    if(user === ""){
        msg.style.color = "red";
        msg.innerHTML = "User ID cannot be empty";
        return;
    }

    if(pic === ""){
        msg.style.color = "red";
        msg.innerHTML = "Please select a picture";
        return;
    }

    msg.style.color = "green";
    msg.innerHTML = "Profile submitted successfully!";
}