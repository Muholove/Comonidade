//funcionalidades da IDE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Referenciando os elementos HTML
const codeEditor = document.getElementById('code-editor');
const executeButton = document.getElementById('execute-button');
const outputFrame = document.getElementById('output-frame');

// Função para atualizar a saída quando o conteúdo do textarea mudar
codeEditor.addEventListener('input', () => {
    // Atualiza o conteúdo do iframe com o código HTML digitado no textarea
    outputFrame.contentDocument.body.innerHTML = codeEditor.value;
});

// Função para executar o código ao clicar no botão "Executar"
executeButton.addEventListener('click', () => {
    // Executa o código JavaScript no iframe
    outputFrame.contentWindow.eval(codeEditor.value);
});


//Funcionalidades do cubo++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let altura = 50
let largura = 50

class Objecto {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }
}

let comprimento = new Objecto(altura, largura)

let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")

c.beginpath()
c.fillRect(0, 0, 50, 50)
c.fillStyle = 'red'
c.fillStroke = 'black'
c.fill()
c.stroke()




//Funcionalidades da pagina login+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Espera o carregamento do DOM para garantir que os elementos estão disponíveis
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário de login e adiciona um ouvinte de evento para o submit
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio do formulário padrão

        // Coleta os valores de nome de usuário e senha dos campos de entrada
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Envia os dados de login para o servidor
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), // Converte os dados em JSON
        })
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => {
            if (data.success) {
                // Redireciona para a página index.html se o login for bem-sucedido
                window.location.href = 'index.html';
            } else {
                // Mostra uma mensagem de erro se as credenciais forem inválidas
                alert('Nome de usuário ou senha incorretos.');
            }
        })
        .catch((error) => {
            console.error('Erro:', error); // Log de erro para o console
            alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.');
        });
    });
});
//Funcionalidades da pagina cadastro+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Espera o carregamento do DOM para garantir que os elementos estão disponíveis
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');

    // Adiciona um ouvinte de evento para o submit no formulário de registro
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio do formulário padrão

        // Coleta os valores de nome de usuário, email e senha dos campos de entrada
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Envia os dados de registro para o servidor
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }), // Converte os dados em JSON
        })
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => {
            if (data.success) {
                // Redireciona para a página de login após registro bem-sucedido
                window.location.href = 'login.html';
            } else {
                // Mostra uma mensagem de erro se o registro falhar
                alert('Erro no registro: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Erro:', error); // Log de erro para o console
            alert('Ocorreu um erro ao tentar registrar. Por favor, tente novamente.');
        });
    });
});
