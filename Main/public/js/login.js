document.querySelector('.login-form').addEventListener("click",function() {
    alert("Login")('submit', loginForm);
}
);

document.querySelector('.signup-form').addEventListener("click",function() {
    alert("Sign In")('submit', signupForm);
}
);

const loginForm = async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Invalid Login');
        }
    }
};

const signupForm = async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Try Again');
        }
    }
};
