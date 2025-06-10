const form = document.getElementById('formulario')

form.addEventListener('submit', ( e ) => {

    e.preventDefault();

    alert('Dados enviados com sucesso!');

    form.reset();

})