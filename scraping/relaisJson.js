const request = require('request');
const cheerio = require('cheerio');
//npm install string-similarity --save
const stringSimilarity = require('string-similarity');

const fs = require('fs');
const listUrl = fs.readFileSync('listeUrl.txt').toString().split(";");
const listRestoEtoile = fs.readFileSync('listeRestoEtoile.txt').toString().split(";");
const writeStream = fs.createWriteStream('data.json');
writeStream.write('[')


for (var i=0; i<listUrl.length; i++)
{
        const url = listUrl[i];
        //console.log(url);
        request(listUrl[i], function(err, resp,html) {
                if (!err&&resp.statusCode==200){
                        const $ = cheerio.load(html);
                        const nomHotelTemp = $('h1.mainTitle2');
                        const nomHotel = nomHotelTemp.text().replace(/\s\s+/g," ");
                        const sub = $('ul.jsSecondNavSub');
                        const price = $('span.price');
                        var rate = $('div.rate').attr('data-reviewrate');
                        if (rate == undefined)
                        {
                                rate = 0;
                        }
                        const nomRestoTemp = sub.children().first().text();
                        const nomResto = nomRestoTemp.replace(/\s\s+/g," ");
                        for (var j=0; j<listRestoEtoile.length; j++)
                        {
                                if (nomResto!='' && stringSimilarity.compareTwoStrings(nomResto, listRestoEtoile[j])>0.80)
                                {
                                        writeStream.write('{\n"HotelName":"'+nomHotel+'",\n"RestaurantName":"'+nomResto+'",\n"Price":"'+price.text()+'",\n"Rating":"'+rate+'",\n"Url":"'+url+'"\n},\n');
                                }
                        }
                }
        })
}

