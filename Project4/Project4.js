console.log("Index 40 Project");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

//console.log(name, email, phone);


name.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your name is valid");
        email.classList.remove('is-invalid');
    }
    else {
        console.log("Your name is not valid");
        email.classList.add('is-invalid');
    }

})

email.addEventListener('blur', () => {
    console.log("email is blurred");
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
})







