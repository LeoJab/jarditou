//------------ Exercice 1 ------------

var age_1_1 = [];
var saisi_1_1 = true;
var age_20 = 0;
var age_40 = 0;
var age_20_40 = 0;

function js_1_1()
{
    var i = 1;

    while(saisi_1_1 == true)
    {
        age_1_1[i] = parseInt(window.prompt("Entrez votre âge (Tapez 0 pour quitter)"));

        if(age_1_1[i] == 0)
        {
            age_1_1.pop;
            saisi_1_1 = false;
        }

        if(age_1_1[i] >= 100)
        {
            saisi_1_1 = false;
        }
        //console.log(age_1_1[i]);

        i++;
    }

    for(i = 0; i < age_1_1.length; i++)
    {
        if (age_1_1[i] == 0)
        {
            age_1_1.pop;
        } else if(age_1_1[i] < 20)
        {
            age_20++;
        } else if (age_1_1[i] > 40) 
        {
            age_40++;
        } else if (age_1_1[i] >= 20)
        {
            age_20_40++;
        } else if (age_1_1[i] <= 40)
        {
            age_20_40++;
        }
    }

    document.getElementById("moins_20").innerHTML += " " + age_20;
    document.getElementById("plus_40").innerHTML += " " + age_40;
    document.getElementById("entre_20_40").innerHTML += " " + age_20_40;
}

//------------ Exercice 2 ------------

function js_2_1()
{
    var n_1_2 = parseInt(document.getElementById("n_1_2").value);
    var m_1_2 = 1;
    var t_1_2 = 0;

    document.getElementById("resultat").innerHTML = "";

    for(i = 1; i <= 10; i++)
    {
        t_1_2 = n_1_2 * m_1_2;

        document.getElementById("resultat").innerHTML += m_1_2 + " * " + n_1_2 + " = " + t_1_2 + "<br>";

        m_1_2++;
    }
}

//------------ Exercice 3 ------------

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
document.getElementById("tb_prm").innerHTML = tab;

function js_3_1()
{
    var prm = document.getElementById("t_1_3").value;
    document.getElementById("error_1_3").innerHTML = "";

    if (prm === "Audrey") {
        tab.splice(0, 1, '" "');
    } else if (prm === "Aurélien") {
        tab.splice(1, 1, '" "');
    } else if (prm === "Flavien") {
        tab.splice(2, 1, '" "');
    } else if (prm === "Jérémy") {
        tab.splice(3, 1, '" "');
    } else if (prm === "Laurent") {
        tab.splice(4, 1, '" "');
    } else if (prm === "Melik") {
        tab.splice(5, 1, '" "');
    } else if (prm === "Nouara") {
        tab.splice(6, 1, '" "');
    } else if (prm === "Salem") {
        tab.splice(7, 1, '" "');
    } else if (prm === "Samuel") {
        tab.splice(8, 1, '" "');
    } else if (prm === "Stéphane") {
        tab.splice(9, 1, '" "');
    } else {
        document.getElementById("error_1_3").innerHTML = "Le prenom n'est pas présent dans la liste";
    }

    document.getElementById("tb_prm").innerHTML = tab;
}

//------------ Exercice 4 ------------

function js_4_1()
{
    var pu = parseInt(document.getElementById("pu_1_4").value);
    var qtecom = parseInt(document.getElementById("qte_1_4").value);
    var rem = 0;
    var port = 6;
    var tot = pu * qtecom;
    var totr = 0;

    if(tot > 200) {
        rem = (tot / 100) * 10;
        totr = tot - rem;
        rem = (tot / 100) * 10  + "€(10%)";
    } else if(tot >= 100 || tot >= 200) {
        rem = (tot / 100) * 5;
        totr = tot - rem;
        rem = (tot / 100) * 5 + "€(5%)";
    } else {
        totr = tot;
        rem = 0;
    }

    console.log(rem);
    console.log(totr);

    if(totr < 500) {
        port = ((totr / 100) * 2);
        
        if(port < 6){
            port = 6;
        }

        totr = totr + port;
    } else {
        port = 0;
    }

    document.getElementById("resultat_1_4").innerHTML = "Prix total est de " + tot + "€ avec une remise de -" + rem + " et " + port + "€ de frais de port, le prix final est de " + totr + "€";


    console.log(totr);
    console.log(port);
}