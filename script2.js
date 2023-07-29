const form = document.getElementById('contact-form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const errorElement = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === '' || emailValue === '' || messageValue === '') {
    errorElement.textContent = 'Please fill out all fields.';
    return;
  }

  // Simulate form submission with a delay of 2 seconds
  setTimeout(() => {
    // Clear error message
    errorElement.textContent = '';

    // Display success message
    successMessage.classList.remove('hidden');

    // Clear form inputs after successful submission
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  }, 2000);
});
