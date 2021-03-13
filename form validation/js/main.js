const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');
const message = document.querySelector('.message')
const homeBtn = document.getElementById('home-btn')
let messages = [];

form.addEventListener('submit', (e) => {
    checkInputs();
    if (messages.length > 0) {
        e.preventDefault()
        errorElement= messages.join(', ')
        console.log(errorElement);
        messages.length=0;
    } else {
        e.preventDefault()
        form.style.display='none';
        message.innerText='Thank you';
        homeBtn.style.display='block'
    }
    
});

function checkInputs(){
    if (name.value === '') {
        Error(name, 'Name is required');
        messages.push('Error')
    } else {
        Success(name);
    }
    if(username.value === '') {
		Error(username, 'Username cannot be blank');
        messages.push('Error')
	} else {
		Success(username);
	}
    if(email.value === '') {
		Error(email, 'Email cannot be blank');
        messages.push('Error')
	} else if (!isEmail(email.value)) {
		Error(email, 'Not a valid email');
        messages.push('Error')
	} else {
		Success(email);
	}
	if(password.value === '') {
		Error(password, 'Password cannot be blank');
        messages.push('Error')
	} else if (password.value.length <= 6) {
        Error(password, 'Password must be longer than 6 characters')
		messages.push('Error')
	} else if ( password.value.length >= 20) {
        Error(password, 'Password must be less than 20 characters');
        messages.push('Error')
    } else if (password.value === username.value ) {
        Error(password,'Password cannot be username')
        messages.push('Error')
    } else {
        Success(password);
    }

}
function Error(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = '#form error small';
	small.innerText = message;
}

function Success(input) {
	const formControl = input.parentElement;
	formControl.className = '#form success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
homeBtn.addEventListener('click', () => {
    location.reload();
})