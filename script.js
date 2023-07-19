
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [80, 75, 75, 70, 80, 70, 30];

window.addEventListener("scroll", () => {
    mainFn();
});

const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progress-percent").forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
            el.previousElementSibling.firstElementChild.textContent =
                progressBarPercents[i];
        });
    }
};

mainFn();

window.addEventListener("resize", () => {
    window.location.reload();
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var subject = 'Contact Form Submission';

    // Create the mailto URL
    var mailtoUrl = 'mailto:swatijaiwal03@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

    // Open the user's email client
    window.open(mailtoUrl, '_blank');
});