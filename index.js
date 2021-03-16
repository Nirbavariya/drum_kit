var no_button = document.querySelectorAll(".drum").length ; 

for(var i=0;i<no_button;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

function handleClick(){
    var pressed= this.innerHTML;
   sound(pressed);
}

document.addEventListener("keydown",function(event){
    sound(event.key);
})

function sound(key){
    switch(key){
        case "w" :
            var audio = new Audio('tom-1.mp3');
            audio.play();
            break;

         case "a" :
            var audio = new Audio('tom-2.mp3');
            audio.play();
            break;  

        case "s" :
            var audio = new Audio('tom-3.mp3');
            audio.play();
            break;
        
        case "d" :
            var audio = new Audio('tom-4.mp3');
            audio.play();
            break;

        case "j" :
            var audio = new Audio('snare.mp3');
            audio.play();
            break;

        case "k" :
            var audio = new Audio('crash.mp3');
            audio.play();
            break;

        case "l" :
            var audio = new Audio('kick-bass.mp3');
            audio.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}
