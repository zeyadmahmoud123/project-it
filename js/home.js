document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('loginButton');
  
  loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('shopNow');
  
  loginButton.addEventListener('click', () => {
    window.open("index.html")
  });
});

document.addEventListener('DOMContentLoaded', () => {
  
  const headings = [
    'Welcome to ActiveWear',
    'Be Bold, Be Active',
    'Style Meets Performance',
    'Gear Up for Greatness'
  ];

  const texts = [
    'Your one-stop shop for premium sportswear.',
    'Explore the best activewear collection.',
    'Upgrade your fitness wardrobe today!',
    'Join the ActiveWear movement.'
  ];

  const dynamicHeading = document.getElementById('dynamicHeading');
  const dynamicText = document.getElementById('dynamicText');

  let index = 0;
  function updateText() {
    dynamicHeading.textContent = headings[index];
    dynamicText.textContent = texts[index];
    index = (index + 1) % headings.length;
  }

  
  setInterval(updateText, 3000);
});


