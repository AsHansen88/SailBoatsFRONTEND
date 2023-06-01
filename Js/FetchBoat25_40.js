console.log("Vi er i Boats25-40")


document.addEventListener("DOMContentLoaded", () => {
    const boatList = document.getElementById("boatList");

    // Fetch all boats
    fetch("http://localhost:8080/boats25-40")
        .then(response => response.json())
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
                .then(response => response.json())
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

