function mostrarMensagem() {
    const mensagens = [
        "Nunca pare de aprender, o conhecimento é o seu superpoder!",
        "Você é capaz de coisas incríveis — basta acreditar e começar!",
        "Todo mestre um dia foi apenas um aluno. Continue!",
        "O futuro pertence a quem se prepara hoje.",
        "Cada linha de código é um passo mais perto dos seus sonhos!",
        "Desafios são oportunidades disfarçadas. Enfrente-os!",
        "A jornada da programação começa com o primeiro 'console.log'.",
        "Com esforço e paciência, tudo se constrói.",
        "O erro de hoje é o aprendizado de amanhã. Continue tentando!",
        "Você está no caminho certo. Continue avançando!"
    ];

    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById("mensagem").innerText = mensagem;
}
