const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('listeUrl.txt');

request('https://www.relaischateaux.com/us/site-map/etablissements', function(err, resp,html) {
 if (!err&&resp.statusCode==200){
   var $ = cheerio.load(html);
   const relais=$('#countryF');
   const list = relais.next().first().children().next();
   list.children().children().each(function(i,element){
     var a =$(this);
     if (a.next().text().includes('Chef'))
     {
       var title=a.text();
       var url=a.attr('href');
       writeStream.write(url+";");
    }
 })
}})

