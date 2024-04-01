function validation_info() {
    var email = document.getElementById('adress1')
    var psw = document.getElementById('psw1')
    var invalid = document.getElementById('invalid-info')
    var message = document.createElement('p')
    var ul = document.createElement('ul')
    var reg1 = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z][a-zA-Z0-9]*\.[a-zA-Z][a-zA-Z0-9]*$/;
    var reg2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,}$/;
    var valid1 = reg1.test(email.value);
    var valid2 = reg2.test(psw.value);
    if (valid1 == false || valid2==false) {
        invalid.innerHTML =''
        message.innerText = '* addres Email ou mot de passe Invalid !'
        message.style.cssText = 'color : red;'
        invalid.appendChild(message)
    }
    if (valid1 == true && valid2==true) {
        invalid.innerHTML =''
        var li1 = document.createElement('li')
        li1.innerText = 'addres Email Valid'
        li1.style.cssText = 'color : white ;'
        var li2 = document.createElement('li')
        li2.innerText = 'Mot de passe Valid'
        li2.style.cssText = 'color : white ;'
        ul.appendChild(li1)
        ul.appendChild(li2)
        invalid.appendChild(ul)
        document.location.href = 'bienvenue.html'
    }
}

function Show_psw() {
    var psw = document.getElementById('psw1')
    var show = document.getElementById('show')
    var hide = document.getElementById('hide')
    if (show.style.display==='block') {
        psw.type = 'password'
        show.style.cssText = 'display:none !important';
        hide.style.cssText = 'display:block !important';
    }else{
        psw.type = 'text';
        show.style.cssText = 'display:block !important';
        hide.style.cssText = 'display:none !important';
    }
}

