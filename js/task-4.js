const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);
const profile = {};

function handleSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value === "" || password.value === "") {
        alert('All form fields must be filled in');        
    } else { 
        profile.email = email.value;
        profile.password = password.value;
        console.log(profile);
            }
    event.currentTarget.reset();
}



