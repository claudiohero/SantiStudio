// Adicione este script no final do seu arquivo ou dentro da tag <body>
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

// Adicione este script para exibir o ícone do hamburger em telas menores
window.addEventListener('resize', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    if (window.innerWidth <= 600) {
        menuToggle.style.display = 'block';
        menu.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        menu.style.display = 'block';
    }
});

// Execute o script uma vez para garantir o comportamento correto ao carregar a página
window.dispatchEvent(new Event('resize'));
