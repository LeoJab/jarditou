var min = 1;
var max = 500;
var random = Math.floor(Math.random() * (max - min) + min);

  function verif()
 {
  var x = document.getElementById("textBox1").value; 
  if (x < random){
    document.getElementById("label1").innerHTML="Plus grand";
  } else if (x > random){
    document.getElementById("label1").innerHTML="Plus petit";
  } else if (x = random){
    window.alert("Bravo tu as trouvé, le nombre est:" + " " + random);
  }
 }

function enregistrer()
{
    var reponse1 = window.prompt("Saisissez votre nom")
    var reponse2 = window.prompt("Saisissez votre prenom")
    var reponse3 = window.confirm("Etes-vous un homme ?")
    window.alert("Bonjour Monieur" + " " + reponse1 + " " + reponse2 + " " + "Bienvenue sur notre site web !")
}

function verification()
{
    var u = document.getElementById("textBox2").value;
    if(u%2 == 0) {
        document.getElementById("reponse").innerHTML="Nombre pair";
    } else {
        document.getElementById("reponse").innerHTML="Nombre impair";
    }
}

function CalculAge()
{
    var today = new Date();
    var ddn = document.getElementById("ddn").value;
    var an=ddn.substr(6,4);
    var mois=ddn.substr(3,2);
    var jour=ddn.substr(0,2);
    
}