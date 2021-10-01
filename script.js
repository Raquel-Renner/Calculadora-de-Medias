var nome = "SeuNome";
var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7;
var notaDoTerceiroBimestre = 4;
var notaDoQuartoBimestre = 2;
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;

//função para fixar casas decimais na var
var notaFixada = notaFinal.toFixed(1);


if(notaFixada >= 5.0)
  alert("Aeee, parabéns, sua nota foi 5 ou mais, vc passou, " + nome + "!");
else 
  alert("Olha, meus pêsames, sua nota foi menor que a média, vc não passou, " + nome + "!");


//Logs
console.log("Olá, bem-vindo: " + nome);
console.log(notaFixada);