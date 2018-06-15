document.querySelector('.client-form input[type=submit]')
    .addEventListener('click', sendForm);
    
function sendForm(e) {
    const form = document.querySelector('.client-form');
    if (form.checkValidity()) { 
        e.preventDefault();
        fetch('/form', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: document.querySelector('.client-form input[name=client-name]').value,
                contact: document.querySelector('.client-form input[name=client-contact]').value,
                lot:  document.querySelector('.client-form select[name=lot-number]').value,
                bid:  document.querySelector('.client-form input[name=client-bid]').value,
            })
        })
        .then( response => response.json() )
        .then( lotsData => {
            if (lotsData.lot === 1) {
                document.querySelector('.last-client-name1').innerText = lotsData.name;
                document.querySelector('.last-client-bid1').innerText = lotsData.bid;
            } else if (lotsData.lot === 2) {
                document.querySelector('.last-client-name2').innerText = lotsData.name;
                document.querySelector('.last-client-bid2').innerText = lotsData.bid;    
            }  else if (lotsData.lot === 3) {
                document.querySelector('.last-client-name3').innerText = lotsData.name;
                document.querySelector('.last-client-bid3').innerText = lotsData.bid;    
            }  else if (lotsData.lot === 4) {
                document.querySelector('.last-client-name4').innerText = lotsData.name;
                document.querySelector('.last-client-bid4').innerText = lotsData.bid;    
            }  else if (lotsData.lot === 5) {
                document.querySelector('.last-client-name5').innerText = lotsData.name;
                document.querySelector('.last-client-bid5').innerText = lotsData.bid;    
            } 
        });
    }
}