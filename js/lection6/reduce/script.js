// const goods = [

//     {
//         price: 115,
//     },
//     {
//         price: 200,
//     },
//     {
//         price: 50,
//     }
// ];

// const reducers = {
//     UAH: (sum, value, key) =>
//     {
//         return sum[key] += value.price
//     },
//     USD: (sum, value, key) =>
//     {
//         return sum[key] += (value.price / 24.48)
//     }
// }

// const combine = (reducers) =>
// {
//     return (cashObj, value) =>
//     {
//         return Object.keys(reducers).reduce((reducer, key) =>
//         {
//             if (reducers[key])
//             {
//                 reducers[key](cashObj, value, key)

//             }
//             else
//             {
//                 return cashObj
//             }
//         }, {})
//     }
// }
// const combinedReducers = combine(reducers)



const currency = {
    USD: 0,
    UAH: 0,
    EUR: 0,
    RUB: 0
}

// const strategiesCount = {
//     USD: (resultObject, key, value) =>
//     {
//         return ({
//             ...resultObject, [key]: resultObject[key] + Number(value)
//         })
//     },
//     UAH: (resultObject, key, value) =>
//     {
//         return ({
//             ...resultObject, [key]: resultObject[key] + Number(value) * 27
//         })
//     },
//     EUR: (resultObject, key, value) =>
//     {
//         return ({ ...resultObject, [key]: resultObject[key] + Number(value) * 29.15 })
//     },
// }

// function combine (strategies)
// {
//     return (currencies, value) =>
//     {
//         return Object.keys(currencies).reduce((prevCurrency, nextCurrency) =>
//         {
//             return prevCurrency = strategies[nextCurrency](prevCurrency, nextCurrency, value)
//         }, currencies)
//     }

// }


// const combineStratagies = combine(strategiesCount);

// const sum = values.reduce(combineStratagies, currency)

// console.log(sum);








// console.log(values);

// function customSort (predicateKey, arr)
// {
//     return arr.sort((objectOne, objectTwo) =>
//     {
//         return objectOne[predicateKey] > objectTwo[predicateKey] ? 1 : -1
//     })
// }
// const sortedValues = values.sort((priceOne, priceTwo) =>
// {
//     return priceOne < priceTwo ? 1 : -1
// })


// let result = goods.some((good, index) =>
// {
//     console.log(good.price);

//     return good.price == 500
// });

// goods.push({ name: 'sdsd', price: "sdsds" })
// let everyItemPositive = goods.every((good) =>
// {
//     return Boolean(good.name)
// })







const countStrategies = {
    UAH: (currenciesHash, keyForCurrencyHash, value) => Object.assign({}, currenciesHash, { [keyForCurrencyHash]: Number(value) + currenciesHash[keyForCurrencyHash] }),
    USD: (currenciesHash, keyForCurrencyHash, value) => ({ ...currenciesHash, [keyForCurrencyHash]: currenciesHash[keyForCurrencyHash] + Number(value) * 0.037 }),
    RUB: (currenciesHash, keyForCurrencyHash, value) => ({ ...currenciesHash, [keyForCurrencyHash]: currenciesHash[keyForCurrencyHash] + Number(value) * 3.60 }),
}

function combine (strategies)
{
    return (currencyHashObject, value) =>
    {
        return Object.keys(currencyHashObject).reduce((currencyHashObject, currenciesHashName) =>
        {

            if (strategies[currenciesHashName])
            {
                return strategies[currenciesHashName](currencyHashObject, currenciesHashName, value)
            }

            return currencyHashObject

        }, currencyHashObject)
    }
}

const combinedStrategies = combine(countStrategies)



let sum = values.reduce(combinedStrategies, currency)



let goodsWithPricesNumbers = goods.map(el =>
{
    return ({ ...el, price: Number(el.price) })
})

let UAHSum = goodsWithPricesNumbers.reduce((currencyHash, nextElement) =>
{
    console.log(currencyHash, nextElement);
    return { ...currencyHash, UAH: nextElement.price + currencyHash["UAH"] }
}, currency)


console.log(UAHSum);

let resulted = { ...currency };

goodsWithPricesNumbers.forEach((el) =>
{
    resulted = { ...resulted, ["UAH"]: el.price + resulted["UAH"] }
})
console.log(resulted);
