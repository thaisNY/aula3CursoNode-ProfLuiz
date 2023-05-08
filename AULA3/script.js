let valores = [];

function calcularmaior(){

  let valor = parseInt(document.getElementById("txtvalor").value);
  valores.push(valor);
  
  tam = valores.length;
  let  i = 0;

  let maior = 0;
  let menor = 10000;

  while(i < tam){
    
    if(valores[i] < menor){
      menor = valores[i];
    }
    else if(valores[i] > maior){
      maior = valores[i];
    }
    
    i = i + 1;
  }
  
  let divMaior = document.getElementById("maior");
  divMaior.innerHTML = "Maior valor " + maior;
  
  let divMenor = document.getElementById("menor");
  divMenor.innerHTML = "Menor valor " + menor;
  

 
}



/*let valores = [2,4,6,20, -1, 12,51];
tam = valores.length;
var i = 0;

var maior = 0;
var menor = 10000;

while(i < tam){
  
  if(valores[i] < menor){
    menor = valores[i];
  }
  else if(valores[i] > maior){
    maior = valores[i];
  }
  
  i = i + 1;
}

console.log("O maior eh" + maior + "o menor eh " + menor );*/ 