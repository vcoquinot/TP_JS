/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

for (essai = 1; essai <= 6;essai++){
	var nombre = Number(prompt("Donner une valeur entre 0 et 100 :"));
		if (nombre < solution){
		console.log(nombre+ " est trop petit");
	}
	else if (nombre > solution){
		console.log(nombre+ " est trop grand");	
	}
	else {
		
	}	
}

if (solution === nombre){
	console.log("Bravo ! la solution était bien "+nombre);
	console.log("vous avez trouvé en "+essai+" essais");
}
else{
	console.log ("Perdu ! La solution était : "+solution+ " et non pas : "+nombre);
}


