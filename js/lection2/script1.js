// let arr = [1,3,3,56,67];

// let newarr =  Array(10).fill(10,0, 2).fill(8, 2,5).fill(77, 5, 20);
// console.log(newarr.length, arr);



// console.log( arr.length);



// console.log(arr.includes(1)); //boolean


// console.log(arr.indexOf(3)); //return index first value which it founds

// let searchIndex = arr.indexOf(3);
// console.log(searchIndex);



function show (...rest)
{
    console.log(...rest);
};


// // join [] => ""   
// // split "" => []

// let serverDate  = [11, 06, 1989]

// let stringFromArr = arr.join(",");

// function generateDate(arr){
// return arr.join(`:`)
// };

// let ourString = generateDate(serverDate);

// let arrFromString = ourString.split(":")
// show(arrFromString)


function increment (value)
{ //number
    return value++;
}

let arr = [increment];

let value = arr.push(show);


function decrement (value)
{
    return value--;
}


// let returnedFunc = arr.pop();
// console.log(returnedFunc);


// arr.shift()


let returnedValue = arr.unshift(decrement);
let lengthPfArra = arr.length;
arr[lengthPfArra] = 144;


let items = [1, 2, 3, 4];



let concatedArr = arr.concat(items);

let spreadedArr = [...arr, ...items];



// let generatedArr = arr;
// console.log(spreadedArr, arr);


// function showName () 
// {
//     return this
// }




let items2 = [1, 2, 3, 4, 5, 6];







// let newArr = items2.map((el)=>el+1);


// let theSameArr = items2.map(
//     function increment(element){
//         return element + 1;
//     })


// console.log(newArr, theSameArr);

// const showName = () =>
// {
//     return this
// }

// let user = {
//     name: "johh",
//     hello: showName
// }



// console.log(this);

// console.log("asas", user.hello());

// arrow lambda






// let arrOfFunction = concatedArr.splice(0, 3);
// console.log(concatedArr);
// console.log(arrOfFunction);



// let slicedArr = concatedArr.slice(0,5);
// console.log(concatedArr);

// console.log(slicedArr);





// arr.unshift((value)=>{
//         console.log('hello',value );    
//     }
// }

// Object  <- Array <- arr



let user = {
    name: 'John',
    surname: 'Rembo'
}



// Object.keys(user).map(el =>
// {
//     console.log(user[el]);

// })


// for (let key in user)
// {
//     if (user.hasOwnProperty(key))
//     {
//         console.log(user[key]);
//     }
// }


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


let matrixBad = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 8],
    [1, 2, 3, 4, 10],
    [1, 2, 3, 4, 11]
]


function ifWIthDiaginale (matrix)
{
    let arrLength = matrix.length;
    let flag = true;
    for (let i = 0; i < matrix.length - 1; i++)
    {
        if (matrix[i].length !== arrLength)
        {
            flag = !flag
            break
        }
    }
    return flag
}

// let result = getDiagonal(matrix);

const newValue = function getDiagonal (matrix)
{
    let correctArr = ifWIthDiaginale(matrix);
    const diagonal = [];
    if (!correctArr)
    {
        return false
    }
    for (let i = 0; i < matrix.length; i++)
    {
        diagonal.push(matrix[i][i])
    }
    return diagonal
}(matrix)




// console.log ( newValue)
// // getChess()

// const getChess = () =>
// {
//     return (
//         "ass"
//     )
// }














