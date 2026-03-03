function createForm() {

    // Create Name Input
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter Name";
    nameInput.id = "name";
    nameInput.style.position = "fixed";
    nameInput.style.backgroundColor ="pink";
    nameInput.style.color ="black";
    nameInput.style.top = "200px";
    nameInput.style.left = "-260px";
    nameInput.style.transition = "0.7s";

    // Create Password Input
    let passInput = document.createElement("input");
    passInput.type = "password";
    passInput.style.backgroundColor ="skyblue";
    passInput.placeholder = "Enter Password";
    passInput.style.color ="black";
    passInput.id = "password";
    passInput.style.position = "fixed";
    passInput.style.top = "250px";
    passInput.style.right = "-140px";
    passInput.style.transition = "0.7s";

    // Create Submit Button
    let submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.style.backgroundColor ="pink";
    submitBtn.style.color ="black";
    submitBtn.style.position = "fixed";
    submitBtn.style.top = "300px";
    submitBtn.style.left = "45%";

    // Append to body
    document.body.appendChild(nameInput);
    document.body.appendChild(passInput);
    document.body.appendChild(submitBtn);

    // Slide animation
    setTimeout(function(){
        nameInput.style.left = "650px";
        passInput.style.right = "710px";
    }, 100);

    // Validation
    submitBtn.onclick = function() {

        let name = nameInput.value;
        let password = passInput.value;

        if (name === "" || password === "") {
            alert("All fields are required!");
        }
        else if (password.length < 6) {
            alert("Password must be at least 6 characters!");
        }
        else {
            alert("Form Submitted Successfully!");
        }
    }
}