function handleInputChange (input)
{
    const value = input.value;
    input.previousSibling.previousSibling.innerText = value
}



function show (

)
{

}

const items = document.getElementsByClassName("container_items");

values = Array.from(items).map(item =>
{

    return item.lastElementChild.previousElementSibling.innerText
})
// }



goods = Array.from(items).map(item =>
{

    return ({
        name: item.firstChild.textContent,
        price: item.lastElementChild.previousElementSibling.innerText
    })
})


