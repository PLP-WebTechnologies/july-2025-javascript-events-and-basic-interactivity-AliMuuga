// ================================
// Part 1 & 2: Event Handling & Interactive Elements
// ================================

// Light/Dark Mode Toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Feature
let counter = 0;
const counterValue = document.getElementById('counterValue');
document.getElementById('incrementBtn').addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById('resetBtn').addEventListener('click', () => {
  counter = 0;
  counterValue.textContent = counter;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// ================================
// Part 3: Form Validation
// ================================

const form = document.getElementById('signupForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  let valid = true;

  // Name validation
  const nameInput = document.getElementById('name');
  const nameError = nameInput.nextElementSibling;
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  const emailInput = document.getElementById('email');
  const emailError = emailInput.nextElementSibling;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Password validation
  const passwordInput = document.getElementById('password');
  const passwordError = passwordInput.nextElementSibling;
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  if (valid) {
    formSuccess.textContent = 'Form submitted successfully!';
    form.reset();
  } else {
    formSuccess.textContent = '';
  }
});
