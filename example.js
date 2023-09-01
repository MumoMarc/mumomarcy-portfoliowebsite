
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".UIUX-Designer-section-header, .Web-Design-section-header");

    sections.forEach((section) => {
        section.addEventListener("click", () => {
            section.parentElement.classList.toggle("expanded");
        });
    });
});
