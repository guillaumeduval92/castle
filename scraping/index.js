document.addEventListener("DOMContentLoaded", ()=>{
let form=document.querySelector("form")


form.string.addEventListener("click", ()=>{
    form.out.innerHTML=""
    let out=form.out
    if(!jsonobj.length)
      return
    let tblstr="<table>"
    for(let prop in jsonobj[0]) {
      tblstr+=`<th>${prop}`
    }
    tblstr+=jsonobj.reduce((s, x) => {
      s+="<tr>"
      for(let prop in x) {
        s+=`<td>${x[prop]}`
      }
      return s
    }, "")
    tblstr+="</table>"
    out.insertAdjacentHTML("beforeend", "<p>" + tblstr)
  })


form.price.addEventListener("click", ()=>{
    form.out.innerHTML=""
    let out=form.out
    if(!jsonpriceobj.length)
      return
    let tblstr="<table>"
    for(let prop in jsonpriceobj[0]) {
      tblstr+=`<th>${prop}`
    }
    tblstr+=jsonpriceobj.reduce((s, x) => {
      s+="<tr>"
      for(let prop in x) {
        s+=`<td>${x[prop]}`
      }
      return s
    }, "")
    tblstr+="</table>"
    out.insertAdjacentHTML("beforeend", "<p>" + tblstr)
  })

  

form.rate.addEventListener("click", ()=>{
    form.out.innerHTML=""
    let out=form.out
    if(!jsonrateobj.length)
      return
    let tblstr="<table>"
    for(let prop in jsonrateobj[0]) {
      tblstr+=`<th>${prop}`
    }
    tblstr+=jsonrateobj.reduce((s, x) => {
      s+="<tr>"
      for(let prop in x) {
        s+=`<td>${x[prop]}`
      }
      return s
    }, "")
    tblstr+="</table>"
    out.insertAdjacentHTML("beforeend", "<p>" + tblstr)
  })

form.name.addEventListener("click", ()=>{
    form.out.innerHTML=""
    let out=form.out
    if(!jsonnameobj.length)
      return
    let tblstr="<table>"
    for(let prop in jsonnameobj[0]) {
      tblstr+=`<th>${prop}`
    }
    tblstr+=jsonnameobj.reduce((s, x) => {
      s+="<tr>"
      for(let prop in x) {
        s+=`<td>${x[prop]}`
      }
      return s
    }, "")
    tblstr+="</table>"
    out.insertAdjacentHTML("beforeend", "<p>" + tblstr)
  })

form.clear.addEventListener("click", ()=>form.out.innerHTML="")
})




let jsonstr = `[{
"HotelName":" Lucas Carton ",
"RestaurantName":" Lucas Carton ",
"Price":"89.00",
"Rating":"0",
"Url":"https://www.relaischateaux.com/us/france/lucascarton-ile-de-france-paris"
},
{
"HotelName":" Maison Rostang ",
"RestaurantName":" Maison Rostang ",
"Price":"90.00",
"Rating":"0",
"Url":"https://www.relaischateaux.com/us/france/rostang-paris"
},
{
"HotelName":" Moulin de l’Abbaye ",
"RestaurantName":" Moulin de l'Abbaye ",
"Price":"145.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/moulin-dordogne-brantome-en-perigord"
},
{
"HotelName":" Le Chambard ",
"RestaurantName":" La Table d'Olivier Nasti ",
"Price":"182.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/le-chambard-haut-rhin-kaysersberg"
},
{
"HotelName":" Le Chambard ",
"RestaurantName":" La Table d'Olivier Nasti ",
"Price":"182.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/le-chambard-haut-rhin-kaysersberg"
},
{
"HotelName":" La Bonne Étape ",
"RestaurantName":" La Bonne Étape ",
"Price":"158.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/bonneetape-alpes-de-haute-provence-chateau-arnoux"
},
{
"HotelName":" Relais de la Poste ",
"RestaurantName":" Relais de la Poste ",
"Price":"162.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/poste-landes-magescq"
},
{
"HotelName":" Auberge du Jeu de Paume ",
"RestaurantName":" La Table du Connétable ",
"Price":"263.50",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/jeudepaume-oise-chantilly"
},
{
"HotelName":" Château de Mercuès ",
"RestaurantName":" Le Duèze ",
"Price":"198.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/mercues-lot-mercues"
},
{
"HotelName":" Le Château de Beaulieu ",
"RestaurantName":" Le Meurin ",
"Price":"170.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/chateaubeaulieu-pas-de-calais-busnes"
},
{
"HotelName":" Hôtel Les Barmes de l'Ours ",
"RestaurantName":" La Table de l'Ours ",
"Price":"325.00",
"Rating":"10",
"Url":"https://www.relaischateaux.com/us/france/barmes-de-l-ours-savoie"
},
{
"HotelName":" Hôtel Le Chabichou Restaurants & Spa ",
"RestaurantName":" Le Chabichou ",
"Price":"470.00",
"Rating":"10",
"Url":"https://www.relaischateaux.com/us/france/chabichou-savoie-courchevel-1850"
},
{
"HotelName":" Maison Lameloise ",
"RestaurantName":" Maison Lameloise ",
"Price":"180.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/lameloise-saone-et-loire-chagny"
},
{
"HotelName":" La Pyramide Patrick Henriroux ",
"RestaurantName":" La Pyramide Patrick Henriroux ",
"Price":"170.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/pyramide-isere-vienne"
},
{
"HotelName":" Château de Valmer ",
"RestaurantName":" La Palmeraie ",
"Price":"244.00",
"Rating":"0",
"Url":"https://www.relaischateaux.com/us/france/chateau-de-valmer-la-croix-valmer"
},
{
"HotelName":" Flocons de Sel ",
"RestaurantName":" Flocons de Sel ",
"Price":"430.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/flocons-haute-savoie-megeve"
},
{
"HotelName":" Le Petit Nice-Passedat ",
"RestaurantName":" Le Petit Nice ",
"Price":"220.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/passedat-bouches-du-rhone-marseille"
},
{
"HotelName":" Le Vieux Logis ",
"RestaurantName":" Le Vieux Logis ",
"Price":"170.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/vieuxlogis-dordogne-tremolat"
},
{
"HotelName":" La Grenouillère ",
"RestaurantName":" La Grenouillère ",
"Price":"180.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/lagrenouillere-pas-de-calais-la-madelaine-sous-montreuil"
},
{
"HotelName":" Château de Berne ",
"RestaurantName":" Le Jardin de Benjamin ",
"Price":"281.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/berne-var-lorgues"
},
{
"HotelName":" La Chapelle Saint-Martin ",
"RestaurantName":" La Chapelle Saint Martin ",
"Price":"135.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/chapelle-haute-vienne-nieul"
},
{
"HotelName":" Royal Champagne Hotel & Spa ",
"RestaurantName":" Le Royal ",
"Price":"390.00",
"Rating":"0",
"Url":"https://www.relaischateaux.com/us/france/royalchampagne-marne-champillon"
},
{
"HotelName":" Baumanière Hôtel & Spa ",
"RestaurantName":" L'Oustau de Baumanière ",
"Price":"225.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/baumaniere-hotel-spa-les-baux-de-provence"
},
{
"HotelName":" Cap d’Antibes Beach Hotel ",
"RestaurantName":" Les Pêcheurs ",
"Price":"294.00",
"Rating":"8",
"Url":"https://www.relaischateaux.com/us/france/antibes-alpes-maritimes-cap-d-antibes"
},
{
"HotelName":" Hameau Albert Ier ",
"RestaurantName":" Albert 1er ",
"Price":"151.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/albert-haute-savoie-chamonix-mont-blanc"
},
{
"HotelName":" Le Couvent des Minimes Hôtel & Spa L'Occitane ",
"RestaurantName":" Le Cloître ",
"Price":"224.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/minimes-alpes-de-haute-provence-mane"
},
{
"HotelName":" Hôtel Impérial Garoupe ",
"RestaurantName":" Le Pavillon ",
"Price":"360.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/garoupe-alpes-maritimes-cap-d-antibes"
},
{
"HotelName":" Château de La Chèvre d’Or ",
"RestaurantName":" La Chèvre d'Or ",
"Price":"237.00",
"Rating":"9",
"Url":"https://www.relaischateaux.com/us/france/chevredor-alpes-maritimes-eze-village"
}]
`
let jsonobj=JSON.parse(jsonstr)


let jsonpriceobj=JSON.parse(JSON.stringify(jsonobj))
jsonpriceobj.sort(function(a, b){
    return a.Price - b.Price;
});


let jsonrateobj=JSON.parse(JSON.stringify(jsonobj))
jsonrateobj.sort(function(a, b){
    return a.Rating - b.Rating;
});


let jsonnameobj=JSON.parse(JSON.stringify(jsonobj))
jsonnameobj.sort( function( a, b ) {
    return a.city < b.city ? -1 : a.city > b.city ? 1 : 0;
});

