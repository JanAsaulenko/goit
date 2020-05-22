
// Object.assign();
// {... }
let smth = "fdkfjdkfj"
function mapper (parametr, value)
{
    let newParametrs = { ...parametr, name: value }
    return newParametrs
}

let user = {
    name: "john"
}

const mappedUser = mapper(user, "johan");






function count (a, b)
{
    return a + b
}

// expect(count(2, 4)).toBe(6)
// // expect(count(2, 4)).toBe(2)

// expect(1).toBeGreaterThan(5)

// expect(mapper(user, "johan").name).toBe("johansds");




// let snapshot;

// expect(user).toMatchSnapshot();


// console.log(snapshot);
// user.name = "julia";

// expect(user).toMatchSnapshot();

// console.log(snapshot);

// function expect (result)
// {
//     return {
//         toBe: (arg) =>
//         {
//             console.log(result === arg)
//         },
//         toBeGreaterThan (arg)
//         {
//             if (result > arg)
//             {

//                 console.log(true)
//             }
//             else
//             {
//                 console.error(false)
//             }
//         },
//         toMatchSnapshot ()
//         {

//             if (snapshot && JSON.stringify(result) !== snapshot)
//             {
//                 console.log('ERROR!');
//                 let symbol = prompt("Press u for update snpashot");
//                 if (symbol === "u")
//                 {
//                     snapshot = JSON.stringify(result)
//                 }
//                 return
//             }
//             snapshot = JSON.stringify(result)
//         },
//     }
// }





// const targetUsers = [
//     {
//         id: 1,
//         name: "john",
//         age: 14,
//         isVoted: false,
//         country: {
//             id: '123123',
//             name: "Venesuela"
//         }
//     },
//     undefined,
//     {
//         id: 2,

//         name: "kristin",
//         age: 24,
//         isVoted: true,
//         country: {
//             id: '32423',
//             name: "Ukraine"
//         }

//     },
//     null,
//     {

//         name: "helen",
//         age: 31,
//         isVoted: true,
//         country: {
//             id: '03930939',
//             name: "Cuba"
//         }
//     },
// ];

// // const customFilter = (arr) => (predicate) =>
// // {
// //     let resultArr = [];

// //     for (let i = 0; i < arr.length; i++)
// //     {

// //         if (predicate(arr[i]))
// //         {
// //             resultArr.push(arr[i])
// //             continue;
// //         }

// //     }
// //     return resultArr
// // }


// // const customFilteredArr = customFilter(targetUsers)((value) => value.age > 18)

// // console.log(customFilteredArr);
// const withoutEmpties = targetUsers.filter(Boolean);

// const votedData = withoutEmpties.map((el) =>
// {
//     return { country: el.country, userId: el.id }
// }).filter(el =>
// {
//     return el.userId
// })



// Array.prototype.customMap = function (predicate)
// {
//     const arr = [...this];
//     const resultArr = []
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (!arr[i])
//         {
//             continue
//         }
//         let result = predicate(arr[i], i, this)
//         resultArr.push(result)
//     }
//     return resultArr
// }



// function calc (value)
// {
//     let innerValue = value;

//     return ({
//         increment ()
//         {
//             innerValue += 1;
//             return this
//         },
//         decrement ()
//         {
//             innerValue -= 1;;
//             return this;
//         },
//         getValue ()
//         {
//             console.log(innerValue);
//             return this
//         }
//     })
// }



// const calculator = calc(5);

// calculator.increment().increment().getValue()


// const result = targetUsers.customMap((el, index, targetUsers) =>
// {
//     return el.name
// })

// console.log(result);







// map  filter find  => []
// forEach 



function carry (func)
{
    return function inner (...rest)
    {
        if (func.length > rest.length) // new func
        {
            return (...newArgs) =>
            {
                return inner.apply(this, [...newArgs, ...rest])
            }
        }
        return func.apply(this, rest) // result 

    }

}

function add (a, b, c)
{
    return a + b + c;
}



let a = add(1, 2, 3);

let curriedAdd = carry(add);
console.log(curriedAdd(2)(2)(34));



