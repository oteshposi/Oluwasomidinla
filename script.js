// Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });
  
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  
    // Fake Payment Button Interaction
    document.getElementById('fake-payment-form').addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent actual form submission
  
      // Display a funny alert
      alert("Oh no! Your card was declined because... it's not real. 😅");
  
      // Redirect to a meme or joke page
      setTimeout(() => {
        window.location.href = 'https://i.imgflip.com/6zqk9l.jpg'; // Replace with your favorite meme
      }, 2000);
    });
  
    // Skill Button Interactions
    const messageBox = document.getElementById('message-box');
  
    document.querySelectorAll('.skill-btn').forEach(button => {
      button.addEventListener('click', () => {
        let message = '';
  
        switch (button.className.split(' ')[1]) {
          case 'product-management':
            message = "She sabi at managing products and teams!";
            break;
          case 'pharmacy':
            message = "She studied pharmacy, what else do you expect? She sabi too!!!";
            break;
          case 'yahoo':
            message = "We will NEVER!!! do such a thing.";
            break;
          case 'singing':
            message = "Unfortunately, this skill has not been unlocked yet, but she can dance... ehn, something like that sha!";
            break;
          default:
            message = "This skill is under development!";
        }
  
        // Show the message box
        messageBox.textContent = message;
        messageBox.classList.remove('hidden');
        messageBox.classList.add('visible');
  
        // Hide the message box after 3 seconds
        setTimeout(() => {
          messageBox.classList.remove('visible');
          messageBox.classList.add('hidden');
        }, 3000);
      });
    });
  
    // Price Doubling Every 10 Seconds
    let currentPrice = 2000;
    const priceDisplay = document.getElementById('current-price');
  
    const priceInterval = setInterval(() => {
      currentPrice *= 2; // Double the price
      priceDisplay.textContent = currentPrice; // Update the displayed price
    }, 10000); // Every 10 seconds (10000ms)
  
    // Stop doubling after a certain amount (optional)
    setTimeout(() => {
      clearInterval(priceInterval); // Stop doubling after 1 minute (60000ms)
    }, 60000); // Adjust as needed
  });