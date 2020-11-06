var drumButton=document.querySelectorAll(".drum");
for(var i=0; i<drumButton.length; i++){
    drumButton[i].addEventListener("click",function () {
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonANnimation(buttonInnerHTML);
    });
}


document.addEventListener('keypress', function(event){

    makeSound(event.key);

    buttonANnimation(event.key);
});

function makeSound(key){

    switch(key){
        case 'v':
            var t1=new Audio("Drumsounds/a1.mp3");
            t1.play();
            break;


        case 'r':
            var t2=new Audio("Drumsounds/a2.mp3");
            t2.play();
            break;


        case 'i':
            var t3=new Audio("Drumsounds/a3.mp3");
            t3.play();
            break;

        case 'n':

                var t3=new Audio("Drumsounds/a4.mp3");
                t3.play();
                break;


        case 'd':
                    var t3=new Audio("Drumsounds/a5.mp3");
                    t3.play();
                    break;


        case 'a':
                        var t3=new Audio("Drumsounds/a6.mp3");
                        t3.play();
                        break;






        default: alert("invalid char");
            
    }
}

function buttonANnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100)
}




