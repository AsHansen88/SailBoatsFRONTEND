console.log("Vi er i fetchSailBoats")

// Fetch all boats
fetch('http://localhost:8080/boats')
    .then(response => response.json())
    .then(data => {
        // Process the list of boats
        data.forEach(boat => {
            displayBoatData(boat); // Display the boat data
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Display boat data
function displayBoatData(boat) {
    var outputDiv = document.getElementById('output');
    var boatInfo = document.createElement('div');
    boatInfo.textContent = JSON.stringify(boat); // Modify this to format the boat data as needed
    outputDiv.appendChild(boatInfo);
}



