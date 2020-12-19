"use strict";
let jeux_pc = [];
let jeux_ps = [];
let nombre = 0;

function dynamicSort(tab) {
    /**
     * @param {array}
     * @return {array} retourne l'array trié sur base de la clé demandée
     */
    let sortOrder = 1;
    if(tab[0] === "-") {
        sortOrder = -1;
        tab = tab.substr(1);
    }
    return function (a,b) {
        let result = (a[tab] < b[tab]) ? -1 : (a[tab] > b[tab]) ? 1 : 0;
        return result * sortOrder;
    }
}

function jeuPc() {
    jeux_pc.sort(dynamicSort("nom"));
    let tabpc = "";
    tabpc += "<table id ='pc'><tr id='nom'><td>nom</td><td>type</td><td>appreciation</td>";
    for (let i in jeux_pc) {
        tabpc += "<tr class=" + jeux_pc[i].nom + "><td>" + jeux_pc[i].nom + "</td><td>"
            + jeux_pc[i].type + "</td><td><button id=" + jeux_pc[i].nom
            + " value = 'like' onclick='recupId(this)'>aime</button>"
            + "<button id=" + jeux_pc[i].nom + " value = 'dislike' onclick='recupId(this)' >aime pas</button></td>"
            + "</tr>";
    }
    tabpc += "</table></br><button onclick=\"jeuPc();\">montrer les jeux PC</button>";
    document.getElementById('pc').innerHTML = tabpc;
}

function jeuPs() {
    /**
     * constuit le tableau de manière dynamique des jeux PS encodés
     **/
    jeux_ps.sort(dynamicSort("nom"));
    let tabps = "";
    tabps += "<table id ='ps'><tr id='nom'><td>nom</td><td>type</td><td>appreciation</td>";
    for (let i in jeux_ps) {
        tabps += "<tr class=" + jeux_ps[i].nom + "ps" + "><td>" + jeux_ps[i].nom + "</td><td>" + jeux_ps[i].type + "</td><td><button id=" + jeux_ps[i].nom + "ps" + " value = 'like' onclick='recupId(this)'>aime</button>"
            + "<button id=" + jeux_ps[i].nom + "ps" + " value = 'dislike' onclick='recupId(this)' >aime pas</button></td>"
            + "</tr>";
    }
    tabps += "</table></br><button onclick=\"jeuPs();\">montrer les jeux Playstation</button>";
    document.getElementById('ps').innerHTML = tabps;

}
function recupId(bouton){
    /**
     * @param {button} récupère l'élément boutton ainsi que son id
     **/
    let choix = document.getElementsByClassName(bouton.id)[0];
    let avis = bouton.value;
    if (avis === 'dislike')
    {
        choix.classList.remove('ok');
        choix.classList.add('non')
    }else
    {
        choix.classList.remove('non');
        choix.classList.add('ok')
    }
}

function getform(event) {
    event.preventDefault();
    let x = {};
    let y = {};
    console.log(nm.value);
    if (plateforme.value === "PC") {
        x = {nom: nm.value, type:type.value};
        jeux_pc.push(x);
        nombre +=1

    }
    if (plateforme.value === "PS") {
        y = {nom: nm.value, type:type.value};
        jeux_ps.push(y);
        nombre += 1;
    }
    document.getElementById("compt").innerHTML = "vous avez incrit "+ nombre+ " données dans le formulaire";
    return false;
}

function init_page() {
    const form = document.getElementById("formulaire");
    form.addEventListener("submit", getform);
}