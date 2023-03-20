let prenom = "";
let nom = "";
let age = 0;

while (prenom === "" || nom === "" || age === 0) {
  prenom = prompt("Entrez votre prénom :");
  nom = prompt("Entrez votre nom :");
  age = parseInt(prompt("Entrez votre âge :"));
}

if (age >= 18) {
  console.log("Bravo ! Vous êtes majeur.");
} else {
  console.log("Désolé, une personne mineure ne peut s'inscrire sur ce site.");
}
