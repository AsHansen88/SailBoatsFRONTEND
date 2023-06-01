console.log("Vi er i boat25")

/*
// Fetch all boats
function getAllBoats() {
    fetch('http://localhost:8080/boats25')
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

// Fetch boat by ID
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

// Add a new boat
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

// Update boat
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

// Delete boat
function deleteBoat(boatId) {
    fetch(`http://localhost:8080/boats25/${boatId}`, {
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


 */

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

function displayBoats(boats) {
    var boatsContainer = document.getElementById('boats-container');
    boatsContainer.innerHTML = '';

    boats.forEach(boat => {
        var boatItem = document.createElement('div');
        boatItem.innerText = `ID: ${boat.id}, Name: ${boat.name}, Type: ${boat.type}`;
        boatsContainer.appendChild(boatItem);
    });

}

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

function deleteBoat(boatId) {
    fetch(`http://localhost:8080/boats25/${boatId}`, {
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