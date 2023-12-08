const form = document.querySelector('form.login-form');
const email = form.querySelector('input[type=email]');
const password = form.querySelector('input[type=password]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  if (!event.target.email.value || !event.target.password.value) {
    alert('All form fields must be filled in');
  } else {
    let emName = event.target.email.name.trim();
    let emValue = event.target.email.value.trim();
    let pwdName = event.target.password.name.trim();
    let pwdValue = event.target.password.value.trim();
    const result = {
      [emName]: emValue,
      [pwdName]: pwdValue,
    };
    console.log(result);
    form.reset();
  }
});
