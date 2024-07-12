const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 1) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TU PREMIO ES: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'TU PREMIO ES: ' + premios;
  if (premio = "VUELVE INTENTAR") {
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/mario-kart-perdiste-perder-loser.mp3');
  }else{
    if (premio = "CANGURO","CHAQUETA","CAMISA","PORTA-H"){
      var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/bites-ta-da-winner.mp3');
}
}
}

 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("CANGURO");
     break;
     case valor > 45 && valor <= 90:
     premio("VUELVE INTENTAR");
     break;
     case valor > 90 && valor <= 135:
     premio("BONO SODEXHOPASS"); 
     break; 
     case valor > 135 && valor <= 180:
     premio("VUELVE INTENTAR");
     break;
     case valor > 180 && valor <= 225:
     premio("BONO SODEXHOPASS");
     break; 
     case valor > 225 && valor <= 270:
     premio("VUELVE INTENTAR");
     break;
     case valor > 270 && valor <= 315:
     premio("PORTA-H");
     break;
     case valor > 315 && valor <= 360:
     premio("VUELVE INTENTAR"); 
     break;
  }

 }, 5000);
 
}
}