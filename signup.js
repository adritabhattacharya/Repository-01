

window.onload = function () {
    var textboxes=document.getElementsByClassName("textbox");
    
    
    for(var i=0;i<textboxes.length;i++){
        if(i==2){
            textboxes[i].addEventListener('input',changeentpos);
        }
        else{
        textboxes[i].addEventListener('input',changepos);
    }
        console.log("implemented function");
    }
  
    function changepos(event){
        var textboxClicked=event.target;
        textboxClicked.style.transform="translate3d(54px, -15px, 0)";
        textboxClicked.style.width="18em";
        console.log(textboxClicked);
        console.log("changepos ran");
    }

    function changeentpos(event){
        var inputgiven=event.target;
       var sec=document.getElementsByClassName("section");
       var section=sec[0];
       section.style.transform="translate3d(54px, -15px, 0)";
       inputgiven.style.width="180px";
       section.style.zIndex="10";
       console.log("changeentpos");
    }
}   
