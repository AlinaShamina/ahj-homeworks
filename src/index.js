import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      const content = this.nextElementSibling;

      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0"; 
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; 
      }
    });
  });
});
