new Typed("#typing", {
  strings: [
    "Mechanical Engineering Student",
    "Student SV-Mesin UGM",
    "Aspiring Mechanical Engineer"
  ],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
