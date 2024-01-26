
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for( let indice = 0; indice < listaDeTeclas.length ; indice++ ){

        let tecla = listaDeTeclas[indice];
        let idAudio = `#som_${tecla.classList[1]}`;
        console.log(tecla  , idAudio)

        tecla.onclick = function(e){    
            console.log('c', e)        
            tocaSom(idAudio);
            tecla.classList.remove('ativa');
            console.log('c aa', e)
            
        }


        tecla.onkeydup = function () {
            console.log('up', e)
            if(e.code === "Enter" || e.code === "Space" ){
                tecla.classList.remove('ativa');
            }            
            
        }     

        tecla.onkeydown = function (e) {
            console.log('down', e)
            if(e.code === "Enter" || e.code === "Space" ){
                //tocaSom(idAudio);
                tecla.classList.remove('ativa');
            }
        }        
}

