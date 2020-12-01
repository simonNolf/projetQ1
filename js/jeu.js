"use strict";
let jeux_pc = ["Leagues of Legends", "Heartstones", "fortnite", "Apex", "GTA", "Smite", "Minecraft"];
let jeux_ps = ["GTA", "fortinte", "Crash", "Assassin's Creed", "FIFA", "Minecraft", "Coll of Duty"];
function jeuPc(jeux_pc){
    let tabpc="";
    tabpc+="<table id ='pc'><tr id='nom'><td>nom</td><td>type</td><td>appreciation</td>";
    for (let i in jeux_pc ){
        tabpc+="<tr class="+ jeux_pc[i]+"><td>"+ jeux_pc[i]+"</td><td><button id=" +  jeux_pc[i]  + " value = 'like' onclick='recupId(this)'>aime</button>"
            + "<button id=" +  jeux_pc[i]  + " value = 'dislike' onclick='recupId(this)' >aime pas</button></td>"
            + "</tr>";
    }
    tabpc+="</table>";
    document.getElementById('pc').innerHTML = tabpc;
}
function jeuPs(jeux_ps){

}