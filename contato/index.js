const form = document.getElementById('formulario');
const mensagens = document.getElementById('mensagensForm');
const descricaoInput = document.querySelector('textarea[name="descricao"]');

descricaoInput.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  mensagens.innerHTML = '';
  mensagens.classList.remove('erro', 'sucesso');
  mensagens.style.display = 'none';

  const nome = document.querySelector('input[name="nome"]').value.trim();
  const sobrenome = document.querySelector('input[name="sobrenome"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const descricao = descricaoInput.value.trim();

  let erros = [];

  if (nome === '') erros.push('O nome não pode estar em branco.');
  if (sobrenome === '') erros.push('O sobrenome não pode estar em branco.');

  const emailVerific = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (email === '') {
    erros.push('O e-mail não pode estar em branco.');
  } else if (!emailVerific.test(email)) {
    erros.push('O e-mail deve estar em um formato válido.');
  }

  if (descricao === '') {
    erros.push('A descrição não pode estar em branco.');
  } else if (descricao.length < 30 || descricao.length > 500) {
    erros.push('A descrição deve ter entre 30 e 500 caracteres.');
  }

  if (erros.length > 0) {
    mensagens.innerHTML = erros.map(e => `<p>${e}</p>`).join('');
    mensagens.classList.add('erro');
    mensagens.style.display = 'block';
  } else {
    mensagens.innerHTML = 'Dados enviados com sucesso!';
    mensagens.classList.add('sucesso');
    mensagens.style.display = 'block';
    form.reset();
    descricaoInput.style.height = 'auto';
  }
});
