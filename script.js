document.addEventListener("DOMContentLoaded", () => {
  // Menu burger
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Animation compétences
  const skills = document.querySelectorAll(".skill-progress");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skills.forEach(skill => {
          skill.style.width = skill.dataset.level + "%";
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const skillsSection = document.querySelector(".skills");
  if (skillsSection) observer.observe(skillsSection);

  // Formulaire contact (simulation envoi)
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert("Merci ${name} ! Votre message a été envoyé. Je vous répondrai à ${email} dès que possible.");
    form.reset();
  });
});