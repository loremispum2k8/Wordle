let pass = 0;

let deleteKey = document.querySelector('.deleteKey');
let enterKey = document.querySelector('.enterKey');

enterKey.addEventListener('click', (e)=>{
    pass = 1;
})

let row = document.getElementsByClassName('row');
let square = document.getElementsByClassName("square");

let squareTrack = 0;
let rowTrack = 0;


let keyboardKey = document.getElementsByClassName("keyboard-key");

for(let i = 0; i < keyboardKey.length; i++){
    keyboardKey[i].addEventListener('click', (e)=>{
            if(rowTrack<6){
                if(pass === 1){
                    if(squareTrack === 5){
                    squareTrack = 0;
                    rowTrack++;
                    pass = 0
                    }
                }
                row[rowTrack].children[squareTrack].style.border = '3px solid red';
                squareTrack++;
                console.log('row'+rowTrack);
            }
    })
}