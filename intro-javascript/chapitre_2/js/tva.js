var priceHt = prompt ("Indiquez le prix HT : ");
var tva = priceHt * 19.6 / 100
var priceTtc = Number(priceHt) + tva 
alert("Le coût TTC est " +priceTtc);



