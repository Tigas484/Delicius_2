document.addEventListener('DOMContentLoaded', function() {
    // Função para mostrar detalhes do personagem
    function showCharacterInfo(character) {
        const infoDiv = document.getElementById(character + '-info');
        if (infoDiv.style.display === 'block') {
            infoDiv.style.display = 'none';
        } else {
            infoDiv.style.display = 'block';
        }
    }

    // Adiciona evento de clique para os botões de detalhes dos personagens
    document.querySelectorAll('.character-card button').forEach(button => {
        button.addEventListener('click', function() {
            showCharacterInfo(this.getAttribute('onclick').split('\'')[1]);
        });
    });

    // Adiciona evento de clique para o botão de iniciar aventura
    document.getElementById('startAdventure').addEventListener('click', function() {
        alert('Prepare-se para a aventura! Em breve...');
    });

    // Validação e envio do formulário de contato
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Mensagem enviada com sucesso!');
            this.reset(); // Limpa o formulário após o envio
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

