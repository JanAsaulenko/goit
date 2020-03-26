
const goods = {
    Book: "Book",
    Cup: "Cup",
    Milk: "Milk",
    Flour: "Flour",
    Potato: "Potato",
    Cucumber: "Cucumber"
}


let body = JSON.stringify(goods);

console.log(body);

const request = async () =>
{

    try
    {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'POST', // или 'PUT'
            body: body, // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // throw new Error("sdsd")
    }
    catch (error)
    {
console.log("our errror", error)
    };
}


request()

let source = document.getElementById("goods").innerHTML;
let tmp = Handlebars.compile(source);


const result = tmp(goods)
const target = document.getElementsByClassName("placeForGoods")[0];
target.innerHTML = result;
target.style.display = "block";
