console.log("Vi er i konkurrence")

// GET all competitions
function getAllCompetitions() {
    fetch('/konkurrence')
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data);
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
}

// GET competition by ID
function getCompetitionById(competitionId) {
    fetch(`/konkurrence/${competitionId}`)
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data);
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
}

// POST a new competition
function addCompetition(competition) {
    fetch('/konkurrence', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(competition)
    })
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data);
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
}

// PUT update competition by ID
function updateCompetition(competitionId, competitionDetails) {
    fetch(`/konkurrence/${competitionId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(competitionDetails)
    })
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data);
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
}

// DELETE competition by ID
function deleteCompetition(competitionId) {
    fetch(`/konkurrence/${competitionId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                // Successful deletion
                console.log('Competition deleted');
            } else {
                throw new Error('Failed to delete competition');
            }
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
}
