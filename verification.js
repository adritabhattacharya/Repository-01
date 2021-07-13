window.onload = function () {
    var ptn = document.getElementsByClassName("ptn");
    var val = 0;
    console.log(ptn);
    for (var i = 0; i < ptn.length; i++) {
        ptn[i].addEventListener('input', incr_val);
    }
    function incr_val(event) {
        val++;
        console.log(val);
        if (val == 5) {
            var buttons = document.getElementsByClassName("submit-button");
            var button = buttons[0];
            button.style.backgroundColor = "black";
            button.style.pointerEvents = "all";
            console.log(button);
            console.log("Submit Button Clickable")
        }
    }
}