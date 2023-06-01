console.log("Vi er i konkurrence")

function getAllCompetitions() {
    fetch('http://localhost:8080/konkurrence')
        .then(response => response.json())
        .then(data => {
            // Process the data
            displayCompetitions(data);
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
}

function displayCompetitions(competitions) {
    const competitionsContainer = document.getElementById('competitions-container');
    competitionsContainer.innerHTML = '';

    competitions.forEach(competition => {
        const competitionElement = document.createElement('div');
        competitionElement.textContent = competition.name;
        competitionsContainer.appendChild(competitionElement);
    });
}
function getCompetitionById(competitionId) {
    fetch(`http://localhost:8080/konkurrence/${competitionId}`)
        .then(response => response.json())
        .then(data => {
            // Process the data
            displayCompetition(data);
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
}

function displayCompetition(competition) {
    const competitionContainer = document.getElementById('competition-container');
    competitionContainer.innerHTML = '';

    const competitionElement = document.createElement('div');
    competitionElement.textContent = JSON.stringify(competition);
    competitionContainer.appendChild(competitionElement);
}

// POST a new competition
function addCompetition(competition) {
    fetch('http://localhost:8080/konkurrence', {
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
    fetch(`http://localhost:8080/konkurrence/${competitionId}`, {
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
    fetch(`http://localhost:8080/konkurrence/${competitionId}`, {
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
