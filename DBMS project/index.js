document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => loadHTMLTable(data['data']));
});
const addBtn = document.querySelector('#add-name-btn');

addBtn.onclick = function () {

    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;

    const rollInput = document.querySelector('#roll-input');
    const roll = rollInput.value;

    const addressInput = document.querySelector('#address-input');
    const address = addressInput.value;

    nameInput.value = "";
    rollInput.value = "";
    addressInput.value = "";

    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ roll: roll, name: name, address: address, })

    }
    )
        .then(response => response.json())
        .then(data => insertRowIntoTable(data['data']));
}

function insertRowIntoTable(data) {

}

// function loadHTMLTable(data) {
    
//     const table = document.querySelector('table tbody');
//     if (data.length === 0) {
//         table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
//         return;
//     }
//     const rollInput = document.querySelector('#roll-input');
    
//     let tableHtml = "";
//     data.forEach(function ({ roll, name, address }) {
        
//         tableHtml += '<tr>';
//         tableHtml += `<td>${roll}</td>`;
//         tableHtml += `<td>${name}</td>`;
//         tableHtml += `<td>${address}</td>`;
//         tableHtml += `<td><button class='delete-row-btn' data-id='${roll}'>Delete></td>`;
//         tableHtml += `<td><button class='edit-row-btn' data-id='${roll}'>Edit></td>`;
//         tableHtml += "</tr>";

//     });
    
//     table.innerHTML = tableHtml;


// }