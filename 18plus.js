// Déclaration de variables pour stocker le prénom, le nom et l'âge de l'utilisateur
let prenom = "";
let nom = "";
let age = 0;

// Boucle while pour demander à l'utilisateur d'entrer son prénom, nom et âge jusqu'à ce que toutes les informations soient fournies
while (prenom === "" || nom === "" || age === 0) {
  // Demande à l'utilisateur d'entrer son prénom
  prenom = prompt("Entrez votre prénom :");
  // Demande à l'utilisateur d'entrer son nom
  nom = prompt("Entrez votre nom :");
  // Demande à l'utilisateur d'entrer son âge et convertit la saisie en nombre entier avec parseInt
  age = parseInt(prompt("Entrez votre âge :"));
}

// Vérifie si l'utilisateur est majeur (âge >= 18)
if (age >= 18) {
  // Affiche un message si l'utilisateur est majeur
  console.log("Bravo ! Vous êtes majeur.");
} else {
  // Affiche un message si l'utilisateur est mineur
  console.log("Désolé, une personne mineure ne peut s'inscrire sur ce site.");
}
