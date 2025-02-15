// Filtro de cursos
document.getElementById('categoria').addEventListener('change', function() {
    const categoria = this.value;
    const cursos = document.querySelectorAll('.curso-item');

    cursos.forEach(curso => {
        if (categoria === 'todos' || curso.getAttribute('data-categoria') === categoria) {
            curso.style.display = 'block';
        } else {
            curso.style.display = 'none';
        }
    });
});

// Newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Obrigado por assinar nossa newsletter, ${email}!`);
    this.reset();
});