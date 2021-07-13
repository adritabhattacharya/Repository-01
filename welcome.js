

window.onload = function () {

    var textboxes = document.getElementsByClassName("textbox");
    for (var i = 0; i < textboxes.length; i++) {
        if (i == 1) {
            textboxes[i].addEventListener('input', changeentpos);
        }
        else {
            textboxes[i].addEventListener('input', changepos);
        }
        console.log("implemented function");
    }
    function changepos(event) {
        var textboxClicked = event.target;
        textboxClicked.style.transform = "translate3d(68px, -17px, 0)";
        textboxClicked.style.width = "155px";
        console.log(textboxClicked);
        console.log("changepos ran");
    }

    function changeentpos(event) {
        var textboxClicked = event.target;
        var sec = document.getElementsByClassName("section");
        var section = sec[0];
        section.style.transform = "translate3d(68px, -17px, 0)";
        textboxClicked.style.width = "140px";
        section.style.width = "175px";

    }
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
    });

}



