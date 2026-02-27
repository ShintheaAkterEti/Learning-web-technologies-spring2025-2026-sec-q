function DOB(){

    let day = document.getElementById("day").value.trim();
    let month = document.getElementById("month").value.trim();
    let year = document.getElementById("year").value.trim();
    let msg = document.getElementById("msg");
 
    if(day === "" || month === "" || year === ""){
        msg.innerHTML = "All fields are required";
        return false;
    }

 
    if(isNaN(day) || isNaN(month) || isNaN(year)){
        msg.innerHTML = "Date must be numbers only";
        return false;
    }

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    
    if(day < 1 || day > 31){
        msg.innerHTML = "Day must be between 1 and 31";
        return false;
    }

    if(month < 1 || month > 12){
        msg.innerHTML = "Month must be between 1 and 12";
        return false;
    }

    if(year < 1900 || year > new Date().getFullYear()){
        msg.innerHTML = "Enter valid year";
        return false;
    }
else{
    msg.style.color = "green";
    msg.innerHTML = "Valid Date of Birth!";
    return false; 
} }