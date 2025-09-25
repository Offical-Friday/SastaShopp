// Reusable utility functions

// Format currency in INR
function formatCurrency(price) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
}

// Validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Debounce for performance (e.g., in GSAP animations or events)
function debounce(fn, ms = 300) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}

// Export if using modules (future-proof)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { formatCurrency, validateEmail, debounce };
}