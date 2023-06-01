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

function addBoat(boat) {
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

function updateBoat(boatId, boatDetails) {
    fetch(`http://localhost:8080/boats25/${boatId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(boatDetails)
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

function deleteBoatByName() {
    var boatName = document.getElementById('boat-name-input').value;

    fetch(`http://localhost:8080/boats25?name=${boatName}`, {
        method: 'DELETE'
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