// Q1: How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log(_.isEqual(obj1, obj2));


//Q2 Use the rest countries API url and display all the country flags in console
//Use the same rest countries and print all countries name, region, sub region and population


//setting up a http request object
let xhr = new XMLHttpRequest();

//create and send a GET request
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

//setting up listener
xhr.onload = function(){
    if (xhr.status >= 200 || xhr.staus < 300) {
        
        let data = JSON.parse(this.responseText);
        
        //display all country flags
        for(let i in data){
            console.log(data[i].flag);
        }

        //print all countries name, region, sub region and population
        for(let i in data){
            console.log(`Name : ${data[i].name} || Region : ${data[i].region} || Sub Region: ${data[i].subregion} || Population : ${data[i].population}`);
        }
    }else {
        console.log("Request Failed");
    }
};

xhr.send();