const menuButton = document.querySelector('.menu');
const navLinks = document.getElementById('links');
const menuIcon = menuButton.querySelector('.fa-bars'); // Ícone do menu
const closeIcon = menuButton.querySelector('.fa-times'); // Ícone de fechar

menuButton.addEventListener('click', function() {
    console.log('O botão de menu foi clicado!');
    navLinks.classList.toggle('active');

    // Alternar entre a exibição do ícone do menu e do ícone de fechar
    menuIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = navLinks.classList.contains('active') ? 'block' : 'none';

    // Add a delay of 0.1 seconds before applying the transition
    setTimeout(function() {
        navLinks.style.transition = 'opacity 0.5s, visibility 0.5s';
    }, 100);
});

// Add an event listener to remove the transition property when the window is resized
window.addEventListener('resize', function() {
    if (window.innerWidth > 700) {
        navLinks.classList.remove('active');
        navLinks.style.transition = 'none';
        menuIcon.style.display = 'block'; // Mostrar o ícone do menu quando a tela for redimensionada
        closeIcon.style.display = 'none'; // Ocultar o ícone de fechar quando a tela for redimensionada
    }
});
