
const liczby = document.querySelectorAll('.liczba')
const operatory = document.querySelectorAll('.operator')
const wyczysc = document.querySelector('.wyczysc')
const usun = document.querySelector('.usun')
const rownosc = document.querySelector('.rownosc')
const wynikPoprzednie = document.querySelector('.poprzednie-dzialanie')
const wynikAktualne = document.querySelector('.aktualne-dzialanie')


var aktualneDzialanie = ''
var operacja = undefined
var poprzednieDzialanie = ''



const oblicz = () => {

    let dzialanie; 
    if (!poprzednieDzialanie || aktualneDzialanie); 
    {
        return; 
    }
    
        const poprzednie = parseFloat(poprzednieDzialanie); 
        const aktualne = parseFloat(aktualneDzialanie); 

        if(isNaN(poprzednie) || isNaN(aktualne)){

            return; 
        }

        switch(operacja){
            case '+':
            dzialanie = poprzednie + aktualne; 
            break; 
            case '-':
            dzialanie = poprzednie - aktualne; 
            case '&times':
            dzialanie = poprzednie * aktualne; 
            break; 
            case '÷': 
            dzialanie = poprzednie / aktualne;
            case '√': 
            dzialanie = Math.pow(poprzednie, 1/aktualne); 
            break;
            default:
            return
        }
        
}

const zaktualizujWynik = () => {

    wynikAktualne.innerText = aktualneDzialanie; 
    wynikPoprzednie.innerText = poprzednieDzialanie;
    if(operacja != null){
        wynikPoprzednie.innerText = poprzednieDzialanie + operacja;

    }
    else {
        wynikPoprzednie.innerText = ""; 
    }

}

const dodajLiczbe = (liczba) => { 
    
    if(liczba === '•')
    {
        if(aktualneDzialanie.includes('.'))
    {
        return;
    }
        liczba = "."
    }
    
    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString() }

liczby.forEach((liczba) => {
   

    liczba.addEventListener("click", () => {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
})

usun.addEventListener("click" , () => {
usunLiczbe()
zaktualizujWynik()
})
operatory[7].addEventListener("click", () => {

    dodajLiczbe();
     zaktualizujWynik();


})

const usunLiczbe = () => 
{
    aktualneDzialanie = aktualneDzialanie.slice(0, -1)
}

const wybierzOperacje = (operator) => {

    if(aktualneDzialanie === "") { return }; 
    if (poprzednieDzialanie !== '') {oblicz()}; 

    operacja = operator; 
    poprzednieDzialanie = aktualneDzialanie; 
    aktualneDzialanie = ""; 

}


operatory.forEach((operator) => { 
    operator.addEventListener("click", () => {

        wybierzOperacje(operator.innerText); 
        zaktualizujWynik(); 

    })
});
