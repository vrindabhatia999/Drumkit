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
        case 'w':
            var t1=new Audio("Drumsounds/a1.mp3");
            t1.play();
            break;

        case 'a':
            var t2=new Audio("Drumsounds/059_808-hiphop.aif")
            t2.play();
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


