
// Fetch the lizards from matelijatjalinnut.json
const fetchLizards = async () => {
    await fetch("../liskot.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("lizards-table-last-updated").textContent = `Liskolista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("lizards-table-body");

            // Fill the animals table
            data.lizardList.forEach(lizard => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.textContent = lizard.name;
                const scientificNameCell = document.createElement("td");
                scientificNameCell.textContent = lizard.scientificName;
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the lizards list:', error));
};

// Fetch the birds from linnut.json
const fetchBirds = async () => {
    await fetch("../linnut.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("birds-table-last-updated").textContent = `Lintulista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("birds-table-body");

            // Fill the animals table
            data.birdList.forEach(bird => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.textContent = bird.name;
                const scientificNameCell = document.createElement("td");
                scientificNameCell.textContent = bird.scientificName;
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the birds list:', error));
};

// Fetch the amphibians from sammakkoelaimet.json
const fetchAmphibians = async () => {
    await fetch("../sammakkoelaimet.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("amphibians-table-last-updated").textContent = `Sammakkoeläinlista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("amphibians-table-body");

            // Fill the animals table
            data.amphibianList.forEach(amphibian => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.textContent = amphibian.name;
                const scientificNameCell = document.createElement("td");
                scientificNameCell.textContent = amphibian.scientificName;
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the amphibians list:', error));
};

// Fetch all on initial load
fetchLizards();
fetchBirds();
fetchAmphibians();

// Search feature for the lizards, works with eventlistener
const filterTable = () => {
    const searchInput = document.getElementById("lizards-search-input");
    const filter = searchInput.value.toUpperCase();
    const tableRows = document.querySelectorAll("#lizards-table-body tr");

    // Filter the rows
    tableRows.forEach(row => {
        const nameCell = row.getElementsByTagName("td")[0];
        const scientificNameCell = row.getElementsByTagName("td")[1];

        if (nameCell || scientificNameCell) {
            const nameText = nameCell.textContent.toUpperCase();
            const scientificNameText = scientificNameCell.textContent.toUpperCase();
            if (nameText.indexOf(filter) > -1 || scientificNameText.indexOf(filter) > -1) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    });
};

document.getElementById("lizards-search-input").addEventListener("input", filterTable);