const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value;

    if (!isValid(emailVal)){
        form.classList.add('error');
    }else{
        form.classList.remove('error');
        form.classList.add('success');
    }
});

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}