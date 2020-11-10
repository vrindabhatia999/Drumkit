var drumButton=document.querySelectorAll(".drum");


///event listeners
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


//functions
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






        // default: alert("invalid char");
            
    }
}



function buttonANnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100)
}

var c1=document.getElementById('c1');
c1.style.backgroundColor='purple';
c1.style.color='white';
c1.style.fontSize='60px';
c1.style.textShadow='5px 5px 5px black';
c1.style.fontFamily='gothic';

var footer=document.createElement('div');
document.body.appendChild(footer);

footer.innerHTML="<strong>Enjoy the drum play....<strong>";

footer.style.textAlign='center';
footer.style.marginTop='5%'
footer.style.fontSize='35px'
footer.style.transition='0.5s ease';
footer.style.textShadow="0 0 7px #00FFFF, 0 2px 9px #00FFFF";
footer.style.color='white';
footer.style.fontFamily='gothic';


function sub1(){
    var d1=document.getElementById('input1');
    var c1=document.getElementById('p1');
    c1.innerHTML="Hey!,How are you?"+" "+d1.value;
}