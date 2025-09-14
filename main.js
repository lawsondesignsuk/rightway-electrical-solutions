  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.parentElement;
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // Close all others if you want accordion style
    document.querySelectorAll('.faq').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      item.querySelector('.faq-icon').textContent = '+';
    });

    // Toggle current
    if (!expanded) {
      faq.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      faq.querySelector('.faq-icon').textContent = '−';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach(link => {
    link.addEventListener("click", () => {
      const article = link.closest(".blog-post");
      const fullText = article.querySelector(".blog-full-text");

      if (fullText.classList.contains("open")) {
        // Collapse
        fullText.classList.remove("open");
        link.textContent = "Read More →";
      } else {
        // Expand
        fullText.classList.add("open");
        link.textContent = "Read Less ↑";
      }
    });
  });
});
