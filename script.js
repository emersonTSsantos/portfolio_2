document.addEventListener("DOMContentLoaded", () => {
    function scrollToElement(elementId) {
        const element = document.querySelector(elementId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 60, // Ajuste para evitar sobreposição com o menu fixo
                behavior: "smooth"
            });
        }
    }

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link
            const targetId = link.getAttribute("href");
            scrollToElement(targetId);

            // Fecha o menu hambúrguer ao clicar em um link
            document.getElementById("mobileMenu").classList.remove("menu-active");
            document.getElementById("hamburger").classList.remove("open");
        });
    });

    // Toggle do menu hambúrguer
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.toggle("menu-active");
            hamburger.classList.toggle("open");
        });
    }
});
