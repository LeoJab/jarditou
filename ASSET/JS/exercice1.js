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

 //---------------------------------------------------------

function enregistrer()
{
    var reponse1 = window.prompt("Saisissez votre nom")
    var reponse2 = window.prompt("Saisissez votre prenom")
    var reponse3 = window.confirm("Etes-vous un homme ?")
    window.alert("Bonjour Monieur" + " " + reponse1 + " " + reponse2 + " " + "Bienvenue sur notre site web !")
}

//---------------------------------------------------------

function verification()
{
    var u = document.getElementById("textBox2").value;
    if(u%2 == 0) {
        document.getElementById("reponse").innerHTML="Nombre pair";
    } else {
        document.getElementById("reponse").innerHTML="Nombre impair";
    }
}

//---------------------------------------------------------

function CalculAge()
{
    var today = new Date();
    var ddn = document.getElementById("ddn").value;
    
    var an=ddn.substr(6,4);
    var mois=ddn.substr(3,2);
    var jour=ddn.substr(0,2);
    
    var dateNaissance = new Date(an + "-" + mois + "-" + jour);
    
    var age = today.getFullYear() - dateNaissance.getFullYear();
    var m = today.getMonth() - dateNaissance.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
      age = age - 1;
    }

    document.getElementById("age").innerHTML= "Votre Age : " +  age;
}

//---------------------------------------------------------

function CalculPlus()
{
  var n1 = document.getElementById("nombre1").value;
  var n2 = document.getElementById("nombre2").value;
  var resultatplus = parseInt(n1) + parseInt(n2);

  document.getElementById("resultat").value = resultatplus;
}

function CalculMoins()
{
  var n1 = document.getElementById("nombre1").value;
  var n2 = document.getElementById("nombre2").value;
  var resultatmoins = parseInt(n1) - parseInt(n2);

  document.getElementById("resultat").value = resultatmoins;
}

function CalculMulti()
{
  var n1 = document.getElementById("nombre1").value;
  var n2 = document.getElementById("nombre2").value;
  var resultatmulti = parseInt(n1) * parseInt(n2);

  document.getElementById("resultat").value = resultatmulti;
}

function CalculDivi()
{
  var n1 = document.getElementById("nombre1").value;
  var n2 = document.getElementById("nombre2").value;
  var resultatdivi = parseInt(n1) / parseInt(n2);
  if (parseInt(n2) === 0){
    document.getElementById("resultat").value = parseInt(n2) / parseInt(n1);
  } else{
    document.getElementById("resultat").value = resultatdivi;
  }
}

//---------------------------------------------------------

function calcul()
{
  var operateur = document.getElementsByClassName("operateur");
  var n1 = document.getElementById("nombre3").value;
  var n2 = document.getElementById("nombre4").value;
  var resultat;

  switch(n1, n2, operateur){
    case '+':
      var resultat = parseInt(n1) + parseInt(n2);
      document.getElementById("resultat2").value = resultat;
      break;
    case '-':
      var resultat = parseInt(n1) - parseInt(n2);
      document.getElementById("resultat2").value = resultat;
      break;
    case '*':
      var resultat = parseInt(n1) * parseInt(n2);
      document.getElementById("resultat2").value = resultat;
      break;
    case '/':
      var resultat = parseInt(n1) / parseInt(n2);
      document.getElementById("resultat2").value = resultat;
      break;
  }
}

