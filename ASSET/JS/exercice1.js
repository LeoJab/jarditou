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
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  var op = document.getElementById("op");
  var value_op = op.value;
  var resu = 0;


  switch(value_op){
    case ("+"):
      resu = n1 + n2;
      document.getElementById("resu").value = resu;
      break;
    case ("-"):
      resu = n1 - n2;
      document.getElementById("resu").value = resu;
      break;
    case ("*"):
      resu = n1 * n2;
      document.getElementById("resu").value = resu;
      break;
    case ("/"):
      resu = n1 / n2;
      document.getElementById("resu").value = resu;
      break;
  }
}

//---------------------------------------------------------

var p = [];
var i = 1;
var saisi = true;

function saisir()
{

  while(saisi == true) 
  {
    p[i] = window.prompt("Saisissez le prénom n°"+i);

    p[i].pop();
    for(;i > p[i].length;)
    {
    document.getElementById("prm").innerHTML += i + " " + p[i] + "<br>";

    if (p[i] == "")
    {
      saisi = false;
    }

    i++;
    }
  }
}