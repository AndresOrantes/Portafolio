const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

    menuIcon.onclick = () => {
        navLinks.classList.toggle('active');
    }


// Lógica del botón "See More"
const seeMoreBtn = document.getElementById('seeMoreBtn');
const hiddenProjects = document.querySelectorAll('.hidden-project');

if(seeMoreBtn) {
    seeMoreBtn.addEventListener('click', () => {
        hiddenProjects.forEach(project => {
            project.style.display = 'flex'; // Muestra los ocultos
        });
        seeMoreBtn.style.display = 'none'; // Oculta el botón
    });
}

// Lógica de la ventana emergente (Modal)
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");

function openModal(cardElement) {
    // Busca el div oculto dentro de la tarjeta que se hizo clic
    const detailsHtml = cardElement.querySelector('.project-details').innerHTML;
    // Lo pega dentro de la ventana emergente
    modalBody.innerHTML = detailsHtml;
    // Muestra la ventana
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    modalBody.innerHTML = ""; // Limpia el contenido
}

// Cierra el modal si das clic en el fondo oscuro
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}