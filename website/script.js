// Set current year in footer.
document.getElementById('year').textContent = new Date().getFullYear();

// Make only one FAQ item open at a time.
const items = document.querySelectorAll('.faq__item');
items.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
