'use strict';
const fetch = require('node-fetch');
const { URLSearchParams } = require("url");
const readlineSync = require('readline-sync');

const url = readlineSync.question('Masukan Link : ');
const functionShort = ( url ) => {
	const params = new URLSearchParams();
    params.append("u", url);

    fetch('https://www.shorturl.at/url-shortener.php', {
    	method: 'POST',
    	body: params, 
    })
    .then(res => res.text())
    .then(body => {
    	let link = body.split('u=')[1].split('">')[0]
    	console.log("shortlink : "+ link)
});
}

functionShort(url)