var nome = "André"
console.log("Bem vindo " + nome)

function calculaMedia() {
  var primeiroInput = document.getElementById('notaDoPrimeiroBimestre')
  var notaDoPrimeiroBimestre = primeiroInput.value === "" ? 0 : parseFloat(primeiroInput.value)
  
  var segundoInput =document.getElementById('notaDoSegundoBimestre')
  var notaDoSegundoBimestre = segundoInput.value === "" ? 0 : parseFloat(segundoInput.value)
  
  var terceiroInput = document.getElementById('notaDoTerceiroBimestre')
  var notaDoTerceiroBimestre = terceiroInput.value === "" ? 0 : parseFloat(terceiroInput.value)
  
  var quartoInput = document.getElementById('notaDoQuartoBimestre')
  var notaDoQuartoBimestre = quartoInput.value === "" ? 0 : parseFloat(quartoInput.value)

  var soma = (notaDoPrimeiroBimestre +  notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)

  var notaFinal = soma/4

  var notaFixada = notaFinal.toFixed(1)

  var resultadoFinal = verificaAprovacao(notaFixada)  
  exibeResultadoNaTela(notaFixada, resultadoFinal)
  
}

function verificaAprovacao(nota){
  var resultadoFinal = ""
  if(nota >= 7){
    resultadoFinal = "Aprovado"
  } else if (nota >= 5) {
    resultadoFinal = "de Recuperação"
  } else {
    resultadoFinal = "Reprovado"
  }
  return resultadoFinal
}

function exibeResultadoNaTela(nota, resultado){
  document.getElementById("resultado").innerHTML = "Bem vindo " + nome + ",<br>Sua média foi " + nota + "<br> Você está " + resultado + "!" 
}

function limpaNotas(){
  document.getElementById('notaDoPrimeiroBimestre').value = ""
  document.getElementById('notaDoSegundoBimestre').value = ""
  document.getElementById('notaDoTerceiroBimestre').value = ""
  document.getElementById('notaDoQuartoBimestre').value = ""
  document.getElementById("resultado").innerHTML = ""
}