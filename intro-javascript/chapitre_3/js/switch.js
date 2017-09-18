var meteo = prompt("Quel temps fait-il aujourd'hui ?");
switch (meteo) {
		case "soleil":
		console.log("Prévoyez le tee-shirt !");
		break;
		case "vent":
		console.log("Prévoyez le pull");
		break;
		case "pluie":
    	console.log("Sortez en blouson.");
    	break;
		case "neige":
    	console.log("Restez au chaud à la maison.");
    	break;
		default:
    	console.log("Je n'ai pas compris !");
}
