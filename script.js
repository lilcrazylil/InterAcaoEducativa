// Função para filtrar os cursos
function filtrarCursos() {
    const categoriaSelecionada = document.getElementById("categoria").value; // Pega o valor selecionado
    const cursos = document.querySelectorAll(".curso-item"); // Seleciona todos os cursos

    cursos.forEach(curso => {
        const categoriaCurso = curso.getAttribute("data-categoria"); // Pega a categoria do curso

        // Mostra ou oculta o curso com base na seleção
        if (categoriaSelecionada === "todos" || categoriaCurso === categoriaSelecionada) {
            curso.style.display = "block"; // Mostra o curso
        } else {
            curso.style.display = "none"; // Oculta o curso
        }
    });
}

// Adiciona um evento de mudança ao select de filtro
document.getElementById("categoria")?.addEventListener("change", filtrarCursos);

// Validação do formulário de newsletter
document.getElementById("newsletter-form")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const emailInput = document.querySelector("#newsletter-form input[type='email']");
    const email = emailInput.value.trim();

    if (!email || !validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    alert("Obrigado por assinar nossa newsletter!");
    emailInput.value = ""; // Limpa o campo de e-mail
});

// Função para validar e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute("href"); // Pega o ID do alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", // Scroll suave
                block: "start" // Alinha o elemento no topo da tela
            });
        }
    });
});