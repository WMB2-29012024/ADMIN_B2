const greetingElement = document.getElementById("greeting");

function submitForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value;
    
    if (nameInput.trim() === "") {
    } else {
        greetingElement.textContent = `Hi ${nameInput}!`;
    }
}

greetingElement.textContent = "Please type your name";