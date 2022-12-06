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

//------------------------- JS-08 EX-1 --------------------------------

var p = [];
var saisi = true;

function saisir()
{

  var i = 1;

  while(saisi == true) 
  {
    p[i] = window.prompt("Saisissez le prénom n°"+i);

    if (p[i] == "")
      {
        saisi = false;
      }
      i++;
  }

  p.pop();

  for(i = 1; i < p.length; i++)
    {
      //console.log(i, p[i]);
      
      document.getElementById("prm").innerHTML += i + " " + p[i] + "<br>";
    }
}

//------------------------- JS-08 EX-2 --------------------------------

function js1_08_2()
{
  var n = document.getElementById("n_08_2").value;
  var s = true
  
  document.getElementById("r2_08_2").innerHTML = "";
  document.getElementById("r1_08_2").innerText = "Liste des nombres entiers précédent" + " " + n + ":";

  while(s == true)
  {
    n = n - 1;
    //console.log(n);
    document.getElementById("r2_08_2").innerHTML += n + ", ";

    if(n == 0)
    {
      s = false;
      break;
    }
  }
}

//------------------------- JS-08 EX-2 --------------------------------

var saisi = true;

function js1_08_3()
{
  var t = [];
  var i = 0;

  while(saisi == true) 
  {
    t[i] = window.prompt("Entrez des nombres entiers (Tapez 0 pour fermer)");

    //console.log(t);
    if (t[i] == 0)
      {
        saisi = false;
      }
    i++
  }

  t.pop();

  for(i = 0; i < t.length; i++)
  { 
    console.log(t);
    var total = t.reduce();
    console.log(total);
  }
}