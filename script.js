
let selector = selector => document.querySelector(selector);
let givenName = selector('#givenName');
let familyName = selector('#familyName');
let email = selector('#email');
let password = selector('#pass');


let givenNameCheck = /^[a-zA-Z]{2,20}$/;
let familyNameCheck = /^[a-zA-Z]{2,20}$/;
let emailCheck = /^\S{1,}@\D{1,}\.\D{2,}$/;
let passCheck = /^\w{8,15}$/;


selector('#givenName').addEventListener('input', function () {
	let testGivenName = givenNameCheck.test(this.value);
	if (testGivenName) {
		this.style.border = '2px solid green';
		selector('.name-success').style.display = 'block';
		selector('.name-error').style.display = 'none';
		selector('.modal-gName').style.display = 'none';
	} else {
		this.style.border = '2px solid red';
		selector('.name-error').style.display = 'block';
		selector('.name-success').style.display = 'none';
		selector('.modal-gName').style.display = 'block';
	}
})

selector('#familyName').addEventListener('input', function () {
	let testFamilyName = familyNameCheck.test(this.value);
	if (testFamilyName) {
		this.style.border = '2px solid green';
		selector('.fName-success').style.display = 'block';
		selector('.fName-error').style.display = 'none';
		selector('.modal-fName').style.display = 'none';
	} else {
		this.style.border = '2px solid red';
		selector('.fName-error').style.display = 'block';
		selector('.fName-success').style.display = 'none';
		selector('.modal-fName').style.display = 'block';
	}
})

selector('#email').addEventListener('input', function () {
	let testEmail = emailCheck.test(this.value);
	if (testEmail) {
		this.style.border = '2px solid green';
		selector('.email-success').style.display = 'block';
		selector('.email-error').style.display = 'none';
		selector('.modal-email').style.display = 'none';
	} else {
		this.style.border = '2px solid red';
		selector('.email-error').style.display = 'block';
		selector('.email-success').style.display = 'none';
		selector('.modal-email').style.display = 'block';
	}
})

selector('#pass').addEventListener('input', function () {
	let testLogin = passCheck.test(this.value);
	if (testLogin) {
		this.style.border = '2px solid green';
		selector('.pass-success').style.display = 'block';
		selector('.pass-error').style.display = 'none';
		selector('.modal-pass').style.display = 'none';
	} else {
		this.style.border = '2px solid red';
		selector('.pass-error').style.display = 'block';
		selector('.pass-success').style.display = 'none';
		selector('.modal-pass').style.display = 'block';
	}
})


signupForm.addEventListener('input', function () {
	if (
		givenNameCheck.test(givenName.value) &&
		familyNameCheck.test(familyName.value) &&
		emailCheck.test(email.value) &&
		passCheck.test(password.value) &&
		check.checked) {
		signUpBtn.removeAttribute('disabled', 'disabled');
	} else {
		signUpBtn.setAttribute('disabled', 'disabled');
	}
})

selector('#signUpBtn').addEventListener('click', function () {
	selector('.account-popUp').style.display = 'block';
	selector('body').style.backgroundColor = 'rgb(146 140 140 / 66%)';
})


selector('.btn-exploring').addEventListener('click', function () {
	location.reload()
})









// Варіант №2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// selector('#givenName').oninput = function () {
// 	let testGivenName = givenNameCheck.test(this.value);
// 	if (testGivenName) {
// 		this.style.border = '2px solid green';
// 		selector('.name-success').style.display = 'block';
// 		selector('.name-error').style.display = 'none';
// 		selector('.modal-gName').style.display = 'none';
// 	} else {
// 		this.style.border = '2px solid red';
// 		selector('.name-error').style.display = 'block';
// 		selector('.name-success').style.display = 'none';
// 		selector('.modal-gName').style.display = 'block';
// 	}
// }



// selector('#familyName').oninput = function () {
// 	let testFamilyName = familyNameCheck.test(this.value);
// 	if (testFamilyName) {
// 		this.style.border = '2px solid green';
// 		selector('.fName-success').style.display = 'block';
// 		selector('.fName-error').style.display = 'none';
// 		selector('.modal-fName').style.display = 'none';
// 	} else {
// 		this.style.border = '2px solid red';
// 		selector('.fName-error').style.display = 'block';
// 		selector('.fName-success').style.display = 'none';
// 		selector('.modal-fName').style.display = 'block';
// 	}
// }

// selector('#email').oninput = function () {
// 	let testEmail = emailCheck.test(this.value);
// 	if (testEmail) {
// 		this.style.border = '2px solid green';
// 		selector('.email-success').style.display = 'block';
// 		selector('.email-error').style.display = 'none';
// 		selector('.modal-email').style.display = 'none';
// 	} else {
// 		this.style.border = '2px solid red';
// 		selector('.email-error').style.display = 'block';
// 		selector('.email-success').style.display = 'none';
// 		selector('.modal-email').style.display = 'block';
// 	}
// }


// selector('#pass').oninput = function () {
// 	let testLogin = passCheck.test(this.value);
// 	if (testLogin) {
// 		this.style.border = '2px solid green';
// 		selector('.pass-success').style.display = 'block';
// 		selector('.pass-error').style.display = 'none';
// 		selector('.modal-pass').style.display = 'none';
// 	} else {
// 		this.style.border = '2px solid red';
// 		selector('.pass-error').style.display = 'block';
// 		selector('.pass-success').style.display = 'none';
// 		selector('.modal-pass').style.display = 'block';
// 	}
// }

// selector('.btn-exploring').addEventListener('click', function () {
// 	selector('.account-popUp').style.display = 'none';
// 	selector('body').style.backgroundColor = 'white';
// 	// selector('#givenName').value = '';
// 	// selector('#familyName').value = '';
// 	// selector('#email').value = '';
// 	// selector('#pass').value = '';
// 	selector('.input').style.border = '2px solid #000';
// 		selector('.name-success').style.display = 'none';
// 		selector('.pass-error').style.display = 'none';
// 		selector('.modal-pass').style.display = 'none';
// 	signupForm.givenName.value = '';
// 	signupForm.familyName.value = '';
// 	signupForm.email.value = '';
// 	signupForm.pass.value = '';
// 	signupForm.check.checked = false;
// 	signUpBtn.setAttribute('disabled', 'disabled');
// })


