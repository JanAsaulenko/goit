let arr = ["john", "dmitriy", "sdsds", 4, 5, 6, 7, 8, true, 10];
arr[0] = arr[0] + 1;
arr[1] = arr[1] + 1;
[2]


//arr  (any) predicate = "string" | number | boolean
function onlyString (innerArray)
{
    let result = [];
    let strings = []; //strings
    let booleans = [];


    let numbers = []
    for (let i = 0; i < innerArray.length; i++)
    {
        if (typeof innerArray[i] === "string")
        {
            strings.push(innerArray[i])
        }
        else if (typeof innerArray[i] === "number")
        {
            numbers.push(innerArray[i])
        }
        else booleans.push(innerArray[i])
    }

    return {
        strings,
        booleans,
        numbers

    }
}



//switch case


function withSwitchCase (arr)
{
    let strings = []; //strings
    let booleans = [];
    let numbers = []
    for (let i = 0; i < arr.length; i++)
    {
        switch (typeof arr[i])
        {
            case "string": {
                strings.push(arr[i])
            } break;
            case "number": {
                numbers.push(arr[i])
            } break;
            default: booleans.push(arr[i])
        }
    }
    return {
        strings, booleans, numbers
    }
}


// let i = 0;
// do
// {
//     console.log(i);
//     i++;

// } while (i < 10)


function customWhile (innerArr, index)
{
    let i = index;

    while (i < innerArr.length - 1)
    {
        ++i;
        show("while", innerArr[i]);
    }
}


function customDoWhile (innerArr, index)
{
    let i = index;
    do
    {
        ++i;
        show(" do while", innerArr[i]);
    }
    while (i < innerArr.length - 1)

}



// customWhile(arr, 0)
// customDoWhile(arr, 0)





function show (firstArgument, ...rest)
{
    console.log(firstArgument, rest);
}


// let filteredString = onlyString(arr)
// show(filteredString)

// show(withSwitchCase(arr))


let footballChampionship = [
    {
        name: "Gorgia",
        footballStars: [
            "John", "Alex"
        ],
        score: 100
    },
    {
        name: "England",
        footballStars: [
            "John", "Alex"
        ],
        score: 80
    },

    {
        name: "Brazil",
        footballStars: [
            "Ronadlinho", "Ronaldo" //0 
        ],
        score: 110
    },

    {
        name: "Ukraine",
        footballStars: [
            "dmutro", "Vsiliy" // 1
        ],
        score: 10
    },

    {
        name: "France",
        footballStars: [
            "dmutro", "Vsiliy" // 1
        ],
        score: 200
    },

]


function indentifyWinner (teams)
{
    let winner = 0;
    let i = 0;
    while (i < teams.length - 1)
    {


        if (teams[i].score < teams[i + 1].score)
        {
            winner = teams[i + 1]
            i++;
            continue;
            console.log("in if", i);

        }
        console.log('after if ', i);

        i++;

    }
    return winner
}

function getFirstNegativeValue (arr)
{
    let firstNegativeValue = 0;
    //     while (j < arr.length - 1)
    //     {

    //         if (arr[j] < 0)
    //         {
    //             firstNegativeValue = arr[j];
    //             break;
    //         }
    //         j++;
    //     }
    //     return firstNegativeValue
    // }

    let count = 0;

    for (let i = 0; i < arr.length - 1; i++)
    {
        console.log(count++);

        // if (arr[i] < 0)
        // {
        //     firstNegativeValue = arr[i];
        //     break;
        // }
    }
    return firstNegativeValue
}
// console.log(~("123") + ~("45"));


// console.log(+"123" + (+"45"));

let t = true;

// console.log(Math.ceil(3.9));

show(Math.min(...[15, 12]))

let name =
{
    ['sdsdsd' + "  "  + "Ssd"] : "surname",
    surname:"sdsd"
}
console.log(name);




console.log(Math.floor(Math.random() * 12));


// Math.random()

let values = [1, -100, 4, 'sdfsdf', -2, 343, -4];


// show(getFirstNegativeValue(values));

// indentifyWinner(footballChampionship)



// http://localhost:5500/js/lection1/part2/













// switch case contruction






// cycles for while do while







// break  continue directives

