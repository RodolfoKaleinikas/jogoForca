$(document).ready(function(){
  
  var palavra = $('h2#palavra').text();
  var arrayPalavra = [];  
  
  function convertePalavra(){
    for (i=0;i<palavra.length;i++){
      arrayPalavra[i] = palavra.charAt(i);
      console.log(arrayPalavra[i]);
    };
  }

  function verificaLetra(letra) {
    console.log(letra.which);
    if ((letra.which >= 65) && (letra.which <= 90)){
      console.log('Digitou Letra');
      return true;
    } else {
      console.log('Não digitou Letra');
      return false;
    }
  }


  $('input#palavra').on('keyup', verificaLetra);
  
  $('button#btnVerifica').on('click', function(e){
    e.preventDefault();
    if(verificaLetra() == true){
      console.log('Digitou letra');
    } else {  
      console.log('Não digitou letra');
    }
  });
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});