


function inner (value)
{
    return () =>
    {

    }
}


function sayHello (obj, func)
{
    return func('car')(obj.name)
}


function show (objectName)
{
    let a = '123';
    return (property_name) => //function 
    {
        return function innerFunction (property_value)  //function 
        {

            return `${objectName.toUpperCase()} his property ${property_name} with value ${property_value}` //string
        }
    }
}



// let prop = show("transport");
// console.log(

//     prop("car")("nissan")
// );

let toyota = {
    name: "toyota"
}


// sayHello(toyota, prop)




// function getUserProperties ({streetName, suitNumber = 'ownhouse',  buildingNumber:houseNumber})
// {
//             let buildingNumber = null;
//     console.log(streetName, suitNumber, houseNumber, buildingNumber);



// }

// getUserProperties({ streetName: "soborna", buildingNumber: '51', suitNumber: 24 })






// function getSimpleProps(streetName, suitNumber = 'ownhouse',  buidingNumber){
//     console.log(streetName, suitNumber ,buidingNumber);

// }

// getSimpleProps("keletska", 21, 143)

// let users = [{
//     name: 'john',
//     age: 14
// },

// {
//     name: 'julia',
//     age: 22
// }
// ]


// let result = [];



// for (let i = 0; i < users.length; i++)
// {
//     result.unshift({
//         name: property_name(users[i].name),
//         age: property_name(users[i].age)
//     })
// }
// console.log(result);

// console.log(property_name(users[i].name));

// let result = property_age(15)

// console.log(result)







function drawChessBoard (itemsLength)
{
    let black = 'X';
    let white = "0";
    // let chessArray = Array(itemsLength).fill(Array(itemsLength))
    for (let item = 0; item < itemsLength; item++)
    {
        chessArray.push(Array(itemsLength).fill(black))
    }


    for (let j = 0; j < chessArray.length; j++) //index target row 
    {

        for (let i = 0; i < chessArray[j].length; i++) //index target column
        {

            if (j % 2 === 0)
            {
                if (i % 2 === 0)
                {
                    chessArray[j][i] = white;
                }
            }
            else 
            {
                if (i % 2 !== 0)
                {
                    chessArray[j][i] = white;

                }
            }
        }

    }

    console.log(chessArray);

}


drawChessBoard(8)
