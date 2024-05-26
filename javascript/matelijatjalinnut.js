// Fetch the available reptile etc. animals from kotivalmiit_matelijatjne.json
const fetchAvailableAnimals = async () => {
    await fetch("../animal_lists/kotivalmiit_matelijatjne.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("available-animals-table-last-updated").textContent = `Lista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("available-animals-table-body");

            // Fill the available animals table
            data.availableAnimalList.forEach(animal => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.innerHTML = animal.name ? animal.name : "<em>Ei nimeä...</em>";
                const scientificNameCell = document.createElement("td");
                scientificNameCell.innerHTML = animal.scientificName ? animal.scientificName : "<em>Ei tieteellistä nimeä...</em>";
                const descriptionCell = document.createElement("td");
                descriptionCell.innerHTML = animal.description ? animal.description : "<em>Ei kuvausta</em>";
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the available animals list:', error));
};

// Fetch the lizards from matelijatjalinnut.json
const fetchLizards = async () => {
    await fetch("../animal_lists/liskot.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("lizards-table-last-updated").textContent = `Lista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("lizards-table-body");

            // Fill the lizards table
            data.lizardList.forEach(lizard => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.innerHTML = lizard.name ? lizard.name : "<em>Ei nimeä...</em>";
                const scientificNameCell = document.createElement("td");
                scientificNameCell.innerHTML = lizard.scientificName ? lizard.scientificName : "<em>Ei tieteellistä nimeä...</em>";
                const descriptionCell = document.createElement("td");
                descriptionCell.innerHTML = lizard.description ? lizard.description : "<em>Ei kuvausta</em>";
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the lizards list:', error));
};

// Fetch the birds from linnut.json
const fetchBirds = async () => {
    await fetch("../animal_lists/linnut.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("birds-table-last-updated").textContent = `Lista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("birds-table-body");

            // Fill the birds table
            data.birdList.forEach(bird => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.innerHTML = bird.name ? bird.name : "<em>Ei nimeä...</em>";
                const scientificNameCell = document.createElement("td");
                scientificNameCell.innerHTML = bird.scientificName ? bird.scientificName : "<em>Ei tieteellistä nimeä...</em>";
                const descriptionCell = document.createElement("td");
                descriptionCell.innerHTML = bird.description ? bird.description : "<em>Ei kuvausta</em>";
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the birds list:', error));
};

// Fetch the amphibians from sammakkoelaimet.json
const fetchAmphibians = async () => {
    await fetch("../animal_lists/sammakkoelaimet.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("amphibians-table-last-updated").textContent = `Lista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("amphibians-table-body");

            // Fill the amphibians table
            data.amphibianList.forEach(amphibian => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.innerHTML = amphibian.name ? amphibian.name : "<em>Ei nimeä...</em>";
                const scientificNameCell = document.createElement("td");
                scientificNameCell.innerHTML = amphibian.scientificName ? amphibian.scientificName : "<em>Ei tieteellistä nimeä...</em>";
                const descriptionCell = document.createElement("td");
                descriptionCell.innerHTML = amphibian.description ? amphibian.description : "<em>Ei kuvausta</em>";
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the amphibians list:', error));
};

// Fetch the snakes from kaarmeet.json
const fetchSnakes = async () => {
    await fetch("../animal_lists/kaarmeet.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("snakes-table-last-updated").textContent = `Lista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("snakes-table-body");

            // Fill the snakes table
            data.snakeList.forEach(snake => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.innerHTML = snake.name ? snake.name : "<em>Ei nimeä...</em>";
                const scientificNameCell = document.createElement("td");
                scientificNameCell.innerHTML = snake.scientificName ? snake.scientificName : "<em>Ei tieteellistä nimeä...</em>";
                const descriptionCell = document.createElement("td");
                descriptionCell.innerHTML = snake.description ? snake.description : "<em>Ei kuvausta</em>";
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the snakes list:', error));
};

// Fetch the arthropods from niveljalkaiset.json
const fetchArthropods = async () => {
    await fetch("../animal_lists/niveljalkaiset.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("arthropods-table-last-updated").textContent = `Lista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("arthropods-table-body");

            // Fill the arthropods table
            data.arthropodList.forEach(arthropod => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.innerHTML = arthropod.name ? arthropod.name : "<em>Ei nimeä...</em>";
                const scientificNameCell = document.createElement("td");
                scientificNameCell.innerHTML = arthropod.scientificName ? arthropod.scientificName : "<em>Ei tieteellistä nimeä...</em>";
                const descriptionCell = document.createElement("td");
                descriptionCell.innerHTML = arthropod.description ? arthropod.description : "<em>Ei kuvausta</em>";
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the arthropods list:', error));
};

// Fetch all on initial load
fetchAvailableAnimals();
fetchLizards();
fetchBirds();
fetchAmphibians();
fetchSnakes();
fetchArthropods();

// Search feature for the lizards, works with eventlistener
const filterLizardsTable = () => {
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

// Search feature for the amphibians, works with eventlistener
const filterAmphibiansTable = () => {
    const searchInput = document.getElementById("amphibians-search-input");
    const filter = searchInput.value.toUpperCase();
    const tableRows = document.querySelectorAll("#amphibians-table-body tr");

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

// Search feature for the birds, works with eventlistener
const filterBirdsTable = () => {
    const searchInput = document.getElementById("birds-search-input");
    const filter = searchInput.value.toUpperCase();
    const tableRows = document.querySelectorAll("#birds-table-body tr");

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

// Search feature for the snakes, works with eventlistener
const filterSnakesTable = () => {
    const searchInput = document.getElementById("snakes-search-input");
    const filter = searchInput.value.toUpperCase();
    const tableRows = document.querySelectorAll("#snakes-table-body tr");

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

// Search feature for the arthropods, works with eventlistener
const filterArthropodsTable = () => {
    const searchInput = document.getElementById("arthropods-search-input");
    const filter = searchInput.value.toUpperCase();
    const tableRows = document.querySelectorAll("#arthropods-table-body tr");

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

document.getElementById("lizards-search-input").addEventListener("input", filterLizardsTable);
document.getElementById("amphibians-search-input").addEventListener("input", filterAmphibiansTable);
document.getElementById("birds-search-input").addEventListener("input", filterBirdsTable);
document.getElementById("snakes-search-input").addEventListener("input", filterSnakesTable);
document.getElementById("arthropods-search-input").addEventListener("input", filterArthropodsTable);