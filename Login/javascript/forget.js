document.getElementById('check_email').style.display = 'none'
document.getElementById('code').style.display = 'none'
var btn_verifier_sendCode = document.getElementById('ckeck_code')
btn_verifier_sendCode.value = 'Send code'

var reg1 = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z][a-zA-Z0-9]*\.[a-zA-Z][a-zA-Z0-9]*$/;
var reg2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,}$/;

var email = document.getElementById('adress1')
var mdp1 = document.getElementById('psw1')
var mdp2 = document.getElementById('psw2')

var passage = false

var code_message = Math.floor(Math.random()*9999)+1000
console.log(code_message);
if (code_message.toString().length == 4) {
    
    function verifier() {
        var verification_code = 0
        if (reg1.test(email.value)==true) {
    
            // remouve vibraation (si email false)
            email.classList.remove('vibrate');
            email.style.border = '';
    
            document.getElementById('check_email').style.display = 'block'
            document.getElementById('code').style.display = 'block'
            btn_verifier_sendCode.value = 'verifier'
            var nbr1 = document.getElementById('nb1').value
            var nbr2 = document.getElementById('nb2').value
            var nbr3 = document.getElementById('nb3').value
            var nbr4 = document.getElementById('nb4').value
            verification_code = nbr1 + nbr2 + nbr3 + nbr4
            if (verification_code == code_message) {
                document.getElementById('remplir_psw').style.display = 'block';
                document.getElementById('code').style.display = 'none';
                document.getElementById('check_email').style.display = 'none';
                btn_verifier_sendCode.style.display = 'none'
                passage = true
            }
        }else{
                email.classList.add('vibrate');
                email.style.border = '1px solid red';
                navigator.vibrate(1); // Activer la vibration pendant 200 millisecondes
        }
    }
    
    document.getElementById('nb1').addEventListener('change',verifier)
    document.getElementById('nb2').addEventListener('change',verifier)
    document.getElementById('nb3').addEventListener('change',verifier)
    document.getElementById('nb4').addEventListener('change',verifier)
    
    function veifier_deux_code() {
        if (btn_verifier_sendCode.value = 'verifier') {
            console.log(1);
            if (passage==true) {
                console.log(2);
                if (reg2.test(mdp1.value) == true) {
                    console.log(3);
                    if (mdp1.value == mdp2.value) {
                        window.location.href = 'bienvenue.html'
                    }
                }
            }
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
    function Show_psw1() {
        var psw2 = document.getElementById('psw2')
        var show = document.getElementById('show2')
        var hide = document.getElementById('hide2')
        if (show.style.display==='block') {
            psw2.type = 'password'
            show.style.cssText = 'display:none !important';
            hide.style.cssText = 'display:block !important';
        }else{
            psw2.type = 'text';
            show.style.cssText = 'display:block !important';
            hide.style.cssText = 'display:none !important';
        }
    }
}else{
    console.log('noooooooooooooooooooooooooooooooooooo');
    window.location.reload()
}
