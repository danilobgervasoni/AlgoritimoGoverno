function atualizarBarra(pergunta) {
  let nota = document.getElementById('nota' + pergunta).value;
  let barra = document.getElementById('barra' + pergunta);
  
  // Converte o valor para um número inteiro
  let valorNumerico = parseInt(nota, 10);
  
  // Verifica se o valor está entre 0 e 100
  if (!isNaN(valorNumerico) && valorNumerico >= 0 && valorNumerico <= 100) {
    barra.style.width = valorNumerico + '%'; // Ajusta a barra de progresso
  } else {
    barra.style.width = '0%'; // Reseta a barra se o valor for inválido
  }
}

function gravarNota(pergunta) {
  let nota = document.getElementById('nota' + pergunta).value;
  let barra = document.getElementById('barra' + pergunta);
  let errorMessage = document.getElementById('error-message' + pergunta);
  let successMessage = document.getElementById('success-message' + pergunta);
  let gravarBtn = document.getElementById('gravar-btn' + pergunta);
  let inputField = document.getElementById('nota' + pergunta);
  let proximoLink = document.getElementById('proximo-link' + pergunta);
  let editarLink = document.getElementById('editar-link' + pergunta);
  let finalizarBtn = document.getElementById('finalizar-btn');

  // Converte o valor para um número inteiro
  let valorNumerico = parseInt(nota, 10);

  if (isNaN(valorNumerico) || valorNumerico < 0 || valorNumerico > 100) {
    errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    successMessage.style.display = 'none'; // Esconde a mensagem de sucesso
    barra.style.width = '0%'; // Reseta a barra de progresso
  } else {
    errorMessage.style.display = 'none'; // Esconde a mensagem de erro
    barra.style.width = valorNumerico + '%'; // Ajusta a barra de progresso
    barra.innerText = valorNumerico + '%'; // Exibe o valor dentro da barra de progresso

    // Oculta o campo de input e o botão de gravação
    inputField.style.visibility = 'hidden'; // O input não será mais exibido
    gravarBtn.classList.add('hidden'); // Mantém o botão oculto
    editarLink.classList.remove('hidden'); // Exibe o link "Editar"
    // Exibe a mensagem de sucesso
    successMessage.style.display = 'block';
    

    if (pergunta === 7) {
      finalizarBtn.classList.remove('disabled'); // Remove a classe de desativado
      finalizarBtn.disabled = false; // Habilita o botão
    } else {
      proximoLink.classList.remove('hidden'); // Exibe o botão "Próximo" nas perguntas anteriores
    }
  }
}

function editarNota(pergunta) {
  let barra = document.getElementById('barra' + pergunta);
  let inputField = document.getElementById('nota' + pergunta);
  let gravarBtn = document.getElementById('gravar-btn' + pergunta);
  let editarLink = document.getElementById('editar-link' + pergunta);
  let successMessage = document.getElementById('success-message' + pergunta);

  inputField.value = ''; // Limpa o campo de input
  barra.style.width = '0%'; // Reseta a barra de progresso
  barra.innerText = ''; // Remove o texto dentro da barra

  // Exibe o campo de input e o botão "Gravar" novamente
  inputField.style.visibility = 'visible';
  gravarBtn.classList.remove('hidden');
  editarLink.classList.add('hidden'); // Oculta o link "Editar"
  successMessage.style.display = 'none'; // Oculta a mensagem de sucesso
}

function proximo(pergunta) {
  if (pergunta < 7) {
    document.getElementById('pergunta' + pergunta).classList.add('hidden'); // Oculta a pergunta atual
    document.getElementById('pergunta' + (pergunta + 1)).classList.remove('hidden'); // Exibe a próxima pergunta
  }
}

function voltar(pergunta) {
  if (pergunta > 1) {
    document.getElementById('pergunta' + pergunta).classList.add('hidden'); // Oculta a pergunta atual
    document.getElementById('pergunta' + (pergunta - 1)).classList.remove('hidden'); // Exibe a pergunta anterior
  }
}
function finalizar() {
  alert("Questionário finalizado! Obrigado por responder.");
  // Aqui você pode redirecionar ou executar outras ações após a finalização
  window.location.href = '../Homepage/home.html'; 
}


