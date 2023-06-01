console.log("Vi er i Boat40")

// Fetch all boats
function getAllBoats() {
    fetch('http://localhost:8080/boats40')
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data);
            displayBoats(data);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
}

// Display the boats
function displayBoats(boats) {
    var boatList = document.getElementById('boatList');
    boatList.innerHTML = ''; // Clear previous data

    boats.forEach(function(boat) {
        var boatItem = document.createElement('div');
        boatItem.textContent = `Boat ID: ${boat.id}, Name: ${boat.name}, Number: ${boat.number}`;
        boatList.appendChild(boatItem);
    });
}

// Fetch a boat by ID
function getBoatById(id) {
    fetch(`http://localhost:8080/boats40/${id}`)
        .then(response => response.json())
        .then(data => {
            // Process the data
            displayBoatInfo(data);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
}

// Display the boat information on the page
function displayBoatInfo(data) {
    const boatInfoDiv = document.getElementById('boat-info');
    boatInfoDiv.innerText = JSON.stringify(data);
}

// Example usage
getBoatById(123);

// Add a new boat
function addBoat(boat) {
    fetch('http://localhost:8080/boats40', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(boat)
    })
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
}

// Update a boat
function updateBoat(id, boatDetails) {
    fetch(`http://localhost:8080/boats40/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(boatDetails)
    })
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
}

// Delete a boat
function deleteBoat(id) {
    fetch(`http://localhost:8080/boats40/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                // Deletion successful
                console.log('Boat deleted');
            } else {
                // Handle the error
                throw new Error('Failed to delete boat');
            }
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
}
