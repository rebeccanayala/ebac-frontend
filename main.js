const form = document.getElementById('form-validation');

form.addEventListener('submit', function(e) {

    e.preventDefault();

    let valA = parseFloat(document.getElementById('inputA').value);
    let valB = parseFloat(document.getElementById('inputB').value);

    const successMessage = 'Cadastro realizado com sucesso!';
    const errorMessage = 'O preço de venda deve ser maior ou igual ao preço de custo.';

    const itemssuccessmessage = document.querySelector('.success-message');
    const itemerrormessage = document.querySelector('.error-message');

    if (valB > valA) {

        itemerrormessage.style.display = 'none';
        itemssuccessmessage.innerHTML = successMessage;
        itemssuccessmessage.style.display = 'block';

        document.getElementById('cost-price').value = '';
        document.getElementById('sale-price').value = '';

    } else {

        itemssuccessmessage.style.display = 'none';
        itemerrormessage.innerHTML = errorMessage;
        itemerrormessage.style.display = 'block';
    }    

});