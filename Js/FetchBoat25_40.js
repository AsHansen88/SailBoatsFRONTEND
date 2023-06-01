console.log("Vi er i Boats25-40")


document.addEventListener("DOMContentLoaded", () => {
    const boatList = document.getElementById("boatList");

    // Fetch all boats
    fetch("http://localhost:8080/boats25-40")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to get boats');
            }
        })
        .then(boats => {
            // Iterate over each boat and create a list item with CRUD buttons
            boats.forEach(boat => {
                const listItem = document.createElement("li");
                const boatInfo = document.createElement("span");
                boatInfo.textContent = `Sejlers navn: ${boat.name}`;
                listItem.appendChild(boatInfo);

                // Create buttons for CRUD operations
                const updateButton = document.createElement("button");
                updateButton.textContent = "Update";
                updateButton.addEventListener("click", () => {
                    updateBoat(boat.id);
                });
                listItem.appendChild(updateButton);

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => {
                    deleteBoat(boat.id);
                });
                listItem.appendChild(deleteButton);

                boatList.appendChild(listItem);
            });
        })
        .catch(error => console.log(error));

    document.getElementById("addBoatForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const formData = new FormData(event.target);
        const boatData = Object.fromEntries(formData.entries());

        // Send a POST request to add a boat
        fetch("http://localhost:8080/boats20-40", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(boatData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to add boat");
                }
            })
            .then(savedBoat => {
                // Handle the response from the server
                console.log("Boat added:", savedBoat);
            })
            .catch(error => {
                console.error(error);
            });
    });


    // Update a boat
    function updateBoat(boatId) {
        const newName = prompt("Enter new name:");
        if (newName) {
            const boatDetails = {
                name: newName
            };

            fetch(`http://localhost:8080/boats25-40/${boatId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(boatDetails)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Failed to update boat");
                    }
                })
                .then(updatedBoat => {
                    console.log("Boat updated:", updatedBoat);
                    // Perform any necessary updates on the UI
                })
                .catch(error => console.log(error));
        }
    }

    // Delete a boat
    function deleteBoat(boatId) {
        if (confirm("Are you sure you want to delete this boat?")) {
            fetch(`http://localhost:8080/boats25-40/${boatId}`, {
                method: "DELETE"
            })
                .then(response => {
                    if (response.ok) {
                        console.log("Boat deleted");
                        // Perform any necessary updates on the UI
                    } else {
                        throw new Error("Failed to delete boat");
                    }
                })
                .catch(error => console.log(error));
        }
    }
});


