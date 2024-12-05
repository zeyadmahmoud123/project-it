document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
      localStorage.setItem('userEmail', email);
      alert('Login successful! Welcome to ActiveWear.');
      window.location.href = 'home.html';
    } else {
      alert('Please fill in all fields.');
    }
  });
});
