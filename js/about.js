document.addEventListener('DOMContentLoaded', () => {
    console.log('About Us Page Loaded');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  });  