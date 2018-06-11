document.querySelector('.client-form input[type=submit]')
    .addEventListener('click', sendForm);
    
function sendForm(e) {
    const form = document.querySelector('.client-form');
    if (form.checkValidity()) { 
        e.preventDefault();
        fetch('form', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: document.querySelector('.client-form input[name=client-name]').value,
                contact: document.querySelector('.client-form input[name=client-contact]').value,
                lot:  document.querySelector('.client-form input[name=lot-number]').value,
                bid:  document.querySelector('.client-form input[name=client-bid]').value,
            })
        })
        .then( response => {
            form.reset();
        } )
    }
}