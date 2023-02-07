let dataContent = document.getElementById('dataContent');

function init () {
    getData()
    .then(data => {
        viewData(data)
    })
    .catch(err => {
        console.log(err);
    })
}

init()

async function getData () {
    const data = await fetch('/api');
    const d = await data.json();

    return d;
}

function viewData (arr) {
    dataContent.innerHTML = arr.map(el => `
    <div>
        <p>Name: ${el.name}</p>
        <p>Price: ${el.price}</p>
        <p>Stock: ${el.stock}</p>
    </div>
    `)
}