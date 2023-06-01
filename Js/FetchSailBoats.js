console.log("Vi er i fetchSailBoats")

document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const addBoatForm = document.getElementById('addBoatForm');
    const updateBoatForm = document.getElementById('updateBoatForm');
    const deleteBoatForm = document.getElementById('deleteBoatForm');

    // Helper function to fetch data
    async function fetchData(url, options) {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorMessage = `Error: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }
        return response.json();
    }

    // Fetch all boats
    function getAllBoats() {
        fetchData('http://localhost:8080/boats')
            .then(data => {
                output.innerHTML = JSON.stringify(data);
            })
            .catch(error => {
                output.innerHTML = `Error: ${error.message}`;
            });
    }

    // Fetch boat by ID
    function getBoatById(id) {
        fetchData(`http://localhost:8080/boats/${id}`)
            .then(data => {
                output.innerHTML = JSON.stringify(data);
            })
            .catch(error => {
                output.innerHTML = `Error: ${error.message}`;
            });
    }

    // Add a new boat
    function addBoat(event) {
        event.preventDefault();
        const boat25 = document.getElementById('boat25Input').value;
        const boat25_40 = document.getElementById('boat25_40Input').value;
        const boat40 = document.getElementById('boat40Input').value;
        const boat = { boat25, boat25_40, boat40 };

        fetchData('http://localhost:8080/boats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(boat)
        })
            .then(data => {
                output.innerHTML = 'Boat added successfully';
                addBoatForm.reset();
                getAllBoats();
            })
            .catch(error => {
                output.innerHTML = `Error: ${error.message}`;
            });
    }

    // Update boat
    function updateBoat(event) {
        event.preventDefault();
        const boatId = document.getElementById('updateBoatId').value;
        const boat25 = document.getElementById('updateBoat25Input').value;
        const boat25_40 = document.getElementById('updateBoat25_40Input').value;
        const boat40 = document.getElementById('updateBoat40Input').value;
        const boat = { boat25, boat25_40, boat40 };

        fetchData(`http://localhost:8080/boats/${boatId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(boat)
        })
            .then(data => {
                output.innerHTML = 'Boat updated successfully';
                updateBoatForm.reset();
                getAllBoats();
            })
            .catch(error => {
                output.innerHTML = `Error: ${error.message}`;
            });
    }

    // Delete boat
    function deleteBoat(event) {
        event.preventDefault();
        const boatId = document.getElementById('deleteBoatId').value;

        fetchData(`http://localhost:8080/boats/${boatId}`, {
            method: 'DELETE'
        })
            .then(data => {
                output.innerHTML = 'Boat deleted successfully';
                deleteBoatForm.reset();
                getAllBoats();
            })
            .catch(error => {
                output.innerHTML = `Error: ${error.message}`;
            });
    }

    // Event listeners for form submissions
    addBoatForm.addEventListener('submit', addBoat);
    updateBoatForm.addEventListener('submit', updateBoat);
    deleteBoatForm.addEventListener('submit', deleteBoat);

    // Initial data fetch
    getAllBoats();
});


