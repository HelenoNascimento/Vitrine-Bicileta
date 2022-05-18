/* variaveis*/

let index = 0;
let bike = document.querySelectorAll('.bike');
let elementColor = document.querySelector('.image');
let bikeOne = "Bike : Hibrida <br> Fabricante: Desconhecido <br> Ano: Desconhecido";
let showDescription = document.getElementById('paragraphy');
showDescription.innerHTML =`${bikeOne}`;

function bikeInfo(index){

    function bikedescricao(){
        let bikeTwo = "Bike : Speed <br> Fabricante: Desconhecido <br> Ano: Desconhecido";
        let bikethree = "Bike : Time Trial <br> Fabricante: Desconhecido <br> Ano: Desconhecido";
        return{bikeTwo,bikethree}
    }   

    let{bikeTwo,bikethree} = bikedescricao();
    function changeDescricao(){
        if(index == 0){
            showDescription.innerHTML = `${bikeOne}`;
        }else if(index ==1){
            showDescription.innerHTML = `${bikeTwo}`;
        }else{
            showDescription.innerHTML = `${bikethree}`;
        }
    }
    changeDescricao();
}




/*muda a cor de fundo*/
function changeColor(index){
    if(index ==0){
        elementColor.style.setProperty("--primary-color","#b4f2fb");
    }else if(index == 1){
        elementColor.style.setProperty("--primary-color","#b90cbfa");
    }else{
        elementColor.style.setProperty("--primary-color","#e5e5e5");
    }
}


/*faz a mensagem aparecer*/
function showPopup(){
    let popup = document.getElementById('popup');
        popup.classList.toggle('show');

    
}
/*faz a mensagem desaparecer*/
function removerPopup(){
    let popup = document.getElementById('popup');
    popup.classList.remove('show');
}

/*muda a bicicleta*/

function next(){
    bike[index].classList.remove('active');
    index= (index + 1) %bike.length;
    bike[index].classList.add('active');
    changeColor(index);
    bikeInfo(index);
}

/*volta a bicicleta*/

function anterior(){
    bike[index].classList.remove('active');
    index= (index + 1) %bike.length;
    bike[index].classList.add('active');
    changeColor(index);
    bikeInfo(index);
}