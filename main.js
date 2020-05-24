const btn = document.getElementById('btn');
const displayKey = document.getElementById('blank');
const displayLetter = document.getElementById('letter');


document.addEventListener('keydown', function (event){
    let keyCode = event.keyCode;
    let keyLetter = event.key;
    displayLetter.innerText = keyLetter;
    displayLetter.style.fontSize = '50px';
    displayKey.innerText = keyCode;  
    displayKey.style.fontSize = '200px';
    displayKey.style.color = '#3498DB';
    btn.style.display = 'none';
    console.log(event);
});

