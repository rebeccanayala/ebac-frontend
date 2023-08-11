const form = document.getElementById('form-validation');

let formValidity = false;

function itemsValidity (valA, valB){
    return valB > valA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let valA = parseFloat(document.getElementById('cost-price').value);
    let valB = parseFloat(document.getElementById('sale-price').value);

    const successmessage = 'Cadastro realizado com sucesso!';
    const itemssuccessmessage = document.querySelector('.success-message');
    
    formValidity = itemsValidity(valA, valB);
    
    if (!formValidity){
        document.querySelector('.error-message').style.display = 'none';
        itemssuccessmessage.innerHTML = successmessage;
        itemssuccessmessage.style.display = 'block';

        valA.value = '';
        valB.value = '';

    } else {
        document.querySelector('.error-message').style.display = 'block';
        itemssuccessmessage.style.display = 'none';
    }    
})