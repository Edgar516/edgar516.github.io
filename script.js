const form = document.getElementById('password-form');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting normally

  const password = passwordInput.value;

  if (password === 'echavarria516') {
    // Redirect to the actual website or display a success message
    window.location.href = 'https://edgarchavarria.me/movies'; // Replace with your actual URL
  } else {
    alert('Incorrect password!');
  }
});