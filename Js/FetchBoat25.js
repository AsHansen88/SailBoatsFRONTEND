console.log("Vi er i boat25")

function getAllBoats() {
    fetch('http://localhost:8080/boats25')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            displayBoats(data);
        })
        .catch(error => {
            console.error(`Error: ${error.message}`);
        });
}

window.addEventListener('DOMContentLoaded', (event) => {
    fetch('http://localhost:8080/boats25')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#boatsTable tbody');
            data.forEach(boat => {
                const row = document.createElement('tr');
                row.innerHTML = `
          <td>${boat.id}</td>
          <td>${boat.name}</td>
          <td>${boat.number}</td>
        `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});

function getBoatById(id) {
    fetch(`http://localhost:8080/boats25/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Handle the data as needed
        })
        .catch(error => {
            console.error(`Error: ${error.message}`);
        });
}

function addBoat() {
    const boatName = document.getElementById('boat-name-input').value;
    const boatNumber = document.getElementById('boat-number-input').value;

    const boat = {
        name: boatName,
        number: boatNumber
    };

    fetch('http://localhost:8080/boats25', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(boat)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Handle the data as needed
        })
        .catch(error => {
            console.error(`Error: ${error.message}`);
        });
}

function updateBoat() {
    const boatId = document.getElementById('update-boat-id-input').value;
    const boatName = document.getElementById('update-boat-name-input').value;
    const boatNumber = document.getElementById('update-boat-number-input').value;

    const boat = {
        id: boatId,
        name: boatName,
        number: boatNumber
    };

    fetch(`http://localhost:8080/boats25/${boatId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(boat)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Handle the data as needed
        })
        .catch(error => {
            console.error(`Error: ${error.message}`);
        });
}


function deleteBoatById() {
    var boatId = document.getElementById('boat-id-input').value;

    fetch(`http://localhost:8080/boats25/${boatId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            console.log('Boat deleted successfully');
        })
        .catch(error => {
            console.error(`Error: ${error.message}`);
        });
}


