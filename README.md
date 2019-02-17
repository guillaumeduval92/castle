# ReadMe

Le projet s'articule en 3 fichiers js et un affichage web (.html + .js)

-michelin.js permet de récupérer la liste des restaurants étoilés sur le site michelin (listeRestoEtoile.txt)<br/>
-relaisUrl.js permet de récupérer la liste des Url associées aux restaurants du site Relais & Châteaux (listeUrl.txt)<br/>
-relaisJson.js crée le fichier json des restaurants étoilés michelin présents dans la liste des Url précédente (data.json)<br/>
-index.html + index.js crée l'affichage du fichier JSON avec fonction de tri par prix et notation

Les deux problèmes non gérés :

-Le fichier json se termine par une ',' au lieu de ']', donc remplacement à la main de la virgule (problème de synchronisation sous nodejs)<br/>
-La lecture du json dans index ne s'effectue pas car require ne marche pas avec le html, le json a été copié collé dans index.js (tentative avec browserify infructueuse)

Les commandes d'installation :

npm install request<br/>
npm install cheerio<br/>
npm install file-system --save<br/>
npm install string-similarity --save