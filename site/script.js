document.addEventListener('DOMContentLoaded', function() {
    var ligne = document.querySelector('.ligne');

    // Ajouter la classe 'visible' après un délai de 3 secondes (3000 millisecondes)
    setTimeout(function() {
        ligne.classList.add('visible');
    }, 3000);
});