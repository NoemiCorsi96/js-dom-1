//Primo esercizio con DOM
//vado a selezionare l'immagine, quindi utilizzo il suo tag
const imgEl = document.querySelector('img')
console.log(imgEl);

//seleziono il bottone, anche qui posso usare solo il nome del tag
const buttonEl = document.querySelector('button')
//per recuperare il percorso dell'img
console.log(imgEl.src);


//Per accendere la lampadina al click sul bottone, devo sare addEventListener
//\Devo cambiare il percorso della lampadina e mettere quella accesa
/* 
buttonEl.addEventListener('click', () => {
    imgEl.src = './img/yellow_lamp.png'
    console.log('Lampadina accesa');
    
})

*/

//ESERCIZIO BONUS
//quando clicco di nuovo la lampadina si deve spengere e poi accendere e cosi via..
buttonEl.addEventListener('click',()=>{
if (imgEl.src.includes('yellow')) {
    imgEl.src = './img/white_lamp.png'
    buttonEl.innerText='Accendi'
} else {
    imgEl.src = './img/yellow_lamp.png'
    buttonEl.innerText='Spengi'
    }
})