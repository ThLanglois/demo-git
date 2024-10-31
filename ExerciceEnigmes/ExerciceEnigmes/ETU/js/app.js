"use strict";
const refSectionEnigmes = document.getElementById("section-enigmes");
const refEnigmeCourante = document.getElementById("enigme-courante");
const arrEnigmesPigees = new Array();
const arrReponsesEnigmesPigees = new Array();
let indexEnigmeCourante = 0;

// Gestion des clics de souris
document.getElementById("bouton-repondre").addEventListener("click", validerReponseEnigme);
document.querySelector("form").addEventListener("submit", empecherEnvoiForm);

initialiserEnigmes();

function empecherEnvoiForm(objEvenement) {
    objEvenement.preventDefault();
  }

function obtenirNombreEntierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function initialiserEnigmes() {
  const NB_ENIGMES_PIGEES = 5;
  for (let i = 0; i < NB_ENIGMES_PIGEES; i++) {
    let indexAleatoire = obtenirNombreEntierAleatoire(0, arrEnigmes.length - 1);
    arrEnigmesPigees.push(arrEnigmes[indexAleatoire]);
    arrReponsesEnigmesPigees.push(arrReponsesEnigmes[indexAleatoire]);
    arrEnigmes.splice(indexAleatoire, 1);
    arrReponsesEnigmes.splice(indexAleatoire, 1);
  }
  refEnigmeCourante.textContent = arrEnigmesPigees[0];
}

function validerReponseEnigme() {
  const refCommentaireEnigme = document.getElementById("commentaire-enigme");
  const refChampReponseEnigme = document.getElementById("champ-reponse-enigme");
  const strReponseEntree = refChampReponseEnigme.value;
  const strReponseAttendue = arrReponsesEnigmesPigees[indexEnigmeCourante];

  if (strReponseEntree !== strReponseAttendue) {
    refCommentaireEnigme.textContent = "Mauvaise réponse";
    refCommentaireEnigme.classList.add("erreur");
  } else {
    indexEnigmeCourante++;
    refCommentaireEnigme.textContent = "";
    refChampReponseEnigme.value = "";

    if (indexEnigmeCourante < arrEnigmesPigees.length) {
      refEnigmeCourante.textContent = arrEnigmesPigees[indexEnigmeCourante];
    } else {
      document.getElementById("zone-enigme").classList.add("cacher");
      document.getElementById("message-succes").classList.remove("cacher");
    }
  } 
}