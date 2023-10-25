let senhaInput = document.querySelector("#password");
let color = getComputedStyle(idCheckbox).getPropertyValue("--color");
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let maiusculas = ["A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let minusculas = ["a", "b", "c", "ç", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let caracteres = ["\"", "'", "#", "$", "%", "&", "*", "(", ")", "_", "+", "-", "=", "{", "[", "]", "}", "^", "/", "?", "~", ";", ":", ".", ">", ",", "<", "\\", "|", "@"];

senhaInput.addEventListener("input", (element) => {
    let pontos = 0;
    let senha = element.target.value;
    let tamanho = element.target.value.length;

    // Verifica o tamanho da senha e adiciona a pontuação correspondente
    if (tamanho >= 1) { pontos += 1; }
    if (tamanho >= 6) { pontos += 2; }
    if (tamanho >= 10) { pontos += 3; }
    if (tamanho >= 12) { pontos += 4; }
    if (tamanho >= 14) { pontos += 5; }

    // Verifica se os caracteres da senha correspondem à algum dos caracteres definidos (número, maiúsculas, minúsculas, caracteres)
    for (let i = 0; i < senha.length; i++) {
        if ((numeros.toString()).includes(senha[i])) {
            pontos += 1;
            break;
        }
    }
    
    for (let i = 0; i < senha.length; i++) {
        if (maiusculas.includes(senha[i])) {
            pontos += 1;
            break;
        }
    }

    for (let i = 0; i < senha.length; i++) {
        if (minusculas.includes(senha[i])) {
            pontos += 1;
            break;
        }
    }

    for (let i = 0; i < senha.length; i++) {
        if (caracteres.includes(senha[i])) {
            pontos += 2;
            break;
        }
    }

    // Pontuação máxima definida para 10
    pontos = Math.min(pontos, 10);

    // Seleciona a barra de progresso para que ela aumente conforme a pontuação da senha
    let barraProgresso = document.querySelector(".barraProgresso");
    let barraProgressoWidth = pontos * 10; 

    barraProgresso.style.width = barraProgressoWidth + '%';

    // Altera as cores de acordo com a força da senha
    if (pontos >= 9) { 
        document.documentElement.style.setProperty("--color", "#0f0");
        barraProgresso.style.backgroundColor = "#0f0";
    }
    if (pontos > 5 && pontos < 9) { 
        document.documentElement.style.setProperty("--color", "#fded00");
        barraProgresso.style.backgroundColor = "#fded00";
    }
    if (pontos <= 5) { 
        document.documentElement.style.setProperty("--color", "#bd1b4e");
        barraProgresso.style.backgroundColor = "#bd1b4e";
    }

});

// Função para modificar o tipo do input onde a senha é digitada e assim mostrar ela
function mostrarSenha(){
    const checkbox = document.getElementById('checkbox');
    const senha = document.getElementById('password');
    if(checkbox.checked){
        senha.type = 'text';
    }else{
        senha.type = 'password';
    }
}

// Função para criar os quadrados da página 
function spans(numeros){
    const section = document.querySelector("section");
    for(let i = 0; i < numeros; i++){
        const span = document.createElement("span");
        section.appendChild(span);
    } 
}

spans(259);