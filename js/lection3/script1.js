let emptyObject = new Object();




let city = {
    id: "098",
    name: 'Vinnytsia',
    getNameWithIndex: function ()
    {
        console.log(this);

        console.log(this.name + " " + this.id);
    }
}




// console.log(city.getNameWithIndex());

function parsedRegionName (name)
{
    let substr = name.substring(Math.floor(name.length / 2), Math.length);

    return substr

}

let region = {
    ...city,


    parsedRegionName (name)
    {
        let substr = name.substring(Math.floor(name.length / 2), Math.length);
        return substr
    },
    getId: function (parser) 
    {
        return parser((this.name))
    }
};




const nissan = {
    brand: "Nissan",
    name: "skyline",
    type: "coupe",
    wd: "lwd",
    engine: " RB26",
    capacity: 3.2,
    country: "Japan",
    defaultPrice: "$",
    year: "1991",
    price: 12000,
}
const toyota = {
    brand: "toyota",
    name: "Mark2",
    type: "sedan",
    wd: "lwd",
    engine: "2jz",
    capacity: 2.6,
    defaultPrice: "$",
    year: "1997",
    price: 10000,
}

const bmw = {
    brand: "bmw",
    name: "x5",
    type: "crossover",
    wd: "awd",
    engine: "v8",
    capacity: 5.0,
    defaultPrice: "$",
    year: "2019",
    price: 130000,
}

function sortBy (cars)
{
    return (property) =>
    {

        if (typeof property === "function")
        {
            return property(cars)
        }
        else
        {
            let newCars = [...cars];
            let index = 0;
            for (let i = 0; i < newCars.length - 1; i++)
            {

                if (newCars[i][property] > newCars[i + 1][property])
                {
                    // index = i + 1
                    newCars[i + 1] = newCars[i]
                    continue;
                }
            }
            return newCars
        }
    }
}






const cars = [nissan, toyota, bmw]

let carsSort = sortBy(cars);

let engineSort = carsSort("capacity")


let getTheCheapest = function (property)
{
    return (arr) =>
    {
        let index = 0;
        {
            for (let i = 0; i < arr.length - 1; i++)
            {
                if (arr[i][property] > arr[i + 1][property])
                {
                    index = i + 1
                    continue;
                }
            }
            return arr[index]
        }
    }
}


function getMostExpensive (property)
{
    return (arr) =>
    {
        let index = 0;
        {
            for (let i = 0; i < arr.length - 1; i++)
            {

                if (arr[i][property] < arr[i + 1][property])
                {
                    index = i + 1
                    continue;
                }
            }
            return arr[index]
        }
    }
}



let cheapest = getTheCheapest("price");

let highetPrice = getMostExpensive("price")

let chieapestCar = carsSort(cheapest);

let mostExpensiveCar = carsSort(highetPrice)

console.log(chieapestCar, mostExpensiveCar);





// console.log(region.getId(parsedRegionName))





// region.getNameWithIndex();
// region.show()







// let region = {
//     instancePart: "centtral part",
//     __proto__: city   //no intresting now
// }


// console.log(emptyObject, city.hasOwnProperty("name"), region.hasOwnProperty("name"));


// for (let key in region)
// {
//     if (region.hasOwnProperty(key))
//     {
//         console.log(key);
//     }
// }



// console.log(city["id"]);

// console.log("keys", Object.keys(city), 'values',  Object.values(city), " entries", Object.entries(city));



// for (let i = 0; i < Object.keys(city).length; i++)
// {
//     // console.log(city[Object.keys(city)[i]]);
// }



// Object.keys(city).map(el =>
// {
//     console.log(city[el]);

// })




