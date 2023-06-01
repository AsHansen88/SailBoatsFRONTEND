console.log("Vi er i fetchSailBoats")

// Create a container element to display the fetched data
const container = document.createElement('div');
document.body.appendChild(container);

fetch('http://localhost:8080/boats')
    .then(response => response.json())
    .then(data => {
        // Iterate over the fetched data
        data.forEach(sailboat => {
            // Create a new element to display each sailboat
            const sailboatElement = document.createElement('div');
            sailboatElement.textContent = JSON.stringify(sailboat);
            container.appendChild(sailboatElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });





