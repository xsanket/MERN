
// document.querySelector("button").addEventListener("click", buttonClick);

// function buttonClick(){
//     alert("hello")
// }
for(let i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //let buttonInnerHTML = this.innerHTML;
        generateSound(buttonInnerHTML);
    });
}


document.addEventListener("keypress", function(f1){
   generateSound(f1.key);
});



function generateSound(key){

    switch (key) {
        case "w":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

            case "a":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "d":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;


            case "j":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;


            case "k":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        default: console.log("wrong button");
            break;
    }
}