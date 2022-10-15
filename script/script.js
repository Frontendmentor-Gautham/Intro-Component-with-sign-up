const btn = document.getElementById('btn');
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const formcontrol = document.getElementById('formControl');

form.addEventListener('submit',e=>{
    e.preventDefault();

    var firstname = fname.value.trim();
    var lastname = lname.value.trim();
    var emailvalue = email.value.trim();
    var passwordvalue = password.value.trim();

    if(firstname === ''){
        errorfunc(fname,'first name cannot be empty ');
    }else{
        successfunc(fname);
    }


    if(lastname === ''){
        errorfunc(lname,'last name cannot be empty');
    }
    else{
        successfunc(lname)
    }

    if(emailvalue === ''){
        errorfunc(email,'email cannot be empty');
    }
    else{
        successfunc(email)
    }


    if(passwordvalue === ''){
        errorfunc(password,'password cannot be empty');
    }
    else{
        successfunc(password)
    }

})

function errorfunc(req,message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
}

function successfunc(req){
    req.className += 'success';
}