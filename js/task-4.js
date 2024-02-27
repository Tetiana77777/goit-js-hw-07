const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const profile = {};
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    profile.email = email.value;
    profile.password = password.value;
    console.log(profile);
  }
  event.currentTarget.reset();
}
//Правильный вариант МЕНТОР прислал

// function handleSubmit(event) {
//   event.preventDefault();

//   const email = event.currentTarget.elements.email.value.trim();
//   const password = event.currentTarget.elements.password.value.trim();

//   if (email === '' || password === '') {
//     alert('Усі поля форми повинні бути заповнені');
//   } else {
//     const profile = {
//       email: email,
//       password: password,
//     };
//     console.log(profile);
//     event.currentTarget.reset();
//   }
// }
