function insert(num) {
       var numero = document.getElementById('resultado').innerHTML;
       document.getElementById('resultado').innerHTML = numero + num
    }

function clean() {
        document.getElementById('resultado').innerHTML = "";
    }

  function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
  }

function calcular(){

   var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }

  else

      document.getElementById('resultado'). innerHTML="";
}

function sen() {
  var resultado = document.getElementById('resultado').innerHTML;
  var resultado = graus * (Math.PI / 180);
  var resultado = Math.sin(radianos);
  document.getElementById('resultado').innerHTML = eval(resultado);
}