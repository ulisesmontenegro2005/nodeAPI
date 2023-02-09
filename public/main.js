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
    dataContent.innerHTML = dataContent.innerHTML + arr.map(el => `
        <tr>
            <td class="pProduct"> ${el.name}</td>
            <td class="pProduct"> ${el.price}</td>
            <td class="pProduct"> ${el.stock}</td>
        </tr>
    `).join('')
}