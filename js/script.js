

var firstName = document.getElementById('firstName')
var firstName_error = document.getElementById('firstName_error')

var mail = document.getElementById('mail')
var mail_error = document.getElementById('mail_error')
var mail_regax = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var pass = document.getElementById('pass')
var pass_error = document.getElementById('pass_error')
var pass_regax = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

var cpass = document.getElementById('cpass')
var cpass_error = document.getElementById('cpass_error')

function sub() {
    if (firstName.value == '') {
        firstName_error.innerHTML = 'Please type your UserName'
        firstName.style.border = '2px solid red'
        firstName.focus()
        return false
    }

    else if (mail.value == '') {
        mail_error.innerHTML = 'Please type your email'
        mail.style.border = '2px solid red'
        mail.focus()
        return false
    }

    else if (!mail_regax.test(mail.value)) {
        mail_error.innerHTML = 'Please type your valid email '
        mail.style.border = '2px solid red'
        mail.focus()
        return false
    }

    else if (pass.value == '') {
        pass_error.innerHTML = 'Please type your password'
        pass.style.border = '2px solid red'
        pass.focus()
        return false
    }

    else if (!pass_regax.test(pass.value)) {
        pass_error.innerHTML = 'Please type minimum 6 digit number and special character '
        pass.style.border = '2px solid red'
        pass.focus()
        return false
    }

    else if (cpass.value == '') {
        cpass_error.innerHTML = 'Please type your confirm password'
        cpass.style.border = '2px solid red'
        cpass.focus()
        return false
    }

    else if (cpass.value != pass.value) {
        cpass_error.innerHTML = 'Please match your confirm password'
        cpass.style.border = '2px solid red'
        cpass.focus()
        return false
    }
}

function passshow() {
    var x = document.getElementById('pass')
    if (x.type == 'password') {
        x.type = 'text'
    }
    else{
        x.type = 'password'
    }
}

function valid() {
    if (firstName.value != '') {
        firstName_error.innerHTML = ''
        firstName.style.border = '2px solid green'
    }

    if (mail.value != '') {
        mail_error.innerHTML = ''
        mail.style.border = '2px solid green'
    }

    if (pass.value != '') {
        pass_error.innerHTML = ''
        pass.style.border = '2px solid green'
    }

    if (cpass.value != '') {
        cpass_error.innerHTML = ''
        cpass.style.border = '2px solid green'
    }
}

firstName.addEventListener('blur', valid)
mail.addEventListener('blur', valid)
pass.addEventListener('blur', valid)
cpass.addEventListener('blur', valid)