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
var saisi1 = true;

function saisir()
{
  var i = 1;

  while(saisi1 == true) 
  {
    p[i] = window.prompt("Saisissez le prénom n°"+i);

    if (p[i] == "")
      {
        saisi1 = false;
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

//------------------------- JS-08 EX-3 --------------------------------

var saisi2 = true;
const t = [];

function js1_08_3()
{
  t[i] = 0;
  var i = 0;

  while(saisi2 == true) 
  {
    t[i] = parseInt(window.prompt("Entrez des nombres entiers (Tapez 0 pour fermer)"));


    //console.log(t);
    if (t[i] == 0)
      {
        saisi2 = false;
      }
    i++
  }

  t.pop();

  const somme = t.reduce((acc, el) => acc + el);
  document.getElementById("r1_08_3").innerHTML = "La somme total est de:" + " " + somme;

  var sum = 0;
  for(i = 0; i < t.length; i++)
  {
    sum += t[i];
  }

  var moyenne = sum / t.length;
  document.getElementById("r2_08_3").innerHTML = "La moyenne est de:" + " " + moyenne;
}

//------------------------- JS-08 EX-4 --------------------------------

function js1_08_4()
{

const n1_08_4 = parseInt(document.getElementById("n1_08_4").value);
const n2_08_4 = parseInt(document.getElementById("n2_08_4").value);
var resultat_08_4 = 0;
var i_08_4 = 1;

document.getElementById("r1_08_4").innerHTML = " ";

  while(i_08_4 <= n1_08_4)
  {
    resultat_08_4 = i_08_4 * n2_08_4;

    document.getElementById("r1_08_4").innerHTML += i_08_4 + " * " + n2_08_4 + " = " + resultat_08_4 + "<br>";
    console.log(resultat_08_4);
    
    i_08_4++;
  }
}

//------------------------- JS-08 EX-5 --------------------------------

