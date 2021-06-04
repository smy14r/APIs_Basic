//BASIC Overview

var request = new XMLHttpRequest();

request.open('GET','<link>');

request.onload=function(){
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
}

request.send();


request.open('GET','<link>?parameters');
request.open('GET','<link>?qty=2');
request.open('GET','<link>?qty=2&order=name');


var request = new XMLHttpRequest();

request.open('GET','<link>');

request.onload=function(){
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    var description = paarsedData[0].description;
}

request.send();


var name = parsedData[0].name;

var products = document.createElement('li');
products.innerHTML = name;
document.body.appendChild(products);

