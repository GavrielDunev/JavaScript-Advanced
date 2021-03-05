document.querySelectorAll('form')[1].addEventListener('submit', login);

async function login(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('http://localhost:3030/users/login',{
        method:'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email, password})
    })

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }
    
    const data = await response.json();
    sessionStorage.setItem('accessToken', data.accessToken);
    window.location.pathname = '05.Fisher-Game/index.html';
}