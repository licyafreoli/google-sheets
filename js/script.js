const scriptURL = 'https://script.google.com/macros/s/AKfycbzwpp6ZcVasgSFk1DO4Gx9v8uHr3kOKq1GEUn28t_N97s94pOGcCyRV844RkhnBDTcm/exec';
const form = document.getElementById('myForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert('Formulário enviado com sucesso!'))
        .catch(error => console.error('Erro ao enviar formulário!', error.message));
});
