// Fetch the animal names from kotivalmiit_pienelaimet.json
const fetchSmallAnimals = async () => {
    await fetch("../animal_lists/kotivalmiit_pienelaimet.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("table-last-updated").textContent = `Lista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("table-body");

            // Fill the animals table
            data.animalList.forEach(animal => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.innerHTML = animal.name ? animal.name : "<em>Ei nimeä...</em>";
                const descriptionCell = document.createElement("td");
                descriptionCell.innerHTML = animal.description ? animal.description : "<em>Ei kuvausta</em>";
                row.appendChild(nameCell);
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the animals list:', error));
};
fetchSmallAnimals();

// Search feature for the animals table, works with eventlistener
const filterTable = () => {
    const searchInput = document.getElementById("searchInput");
    const filter = searchInput.value.toUpperCase();
    const tableRows = document.querySelectorAll("#table-body tr");

    // Filter the rows
    tableRows.forEach(row => {
        const nameCell = row.getElementsByTagName("td")[0];
        const scientificNameCell = row.getElementsByTagName("td")[1];

        if (nameCell || scientificNameCell) {
            const nameText = nameCell.textContent.toUpperCase();
            if (nameText.indexOf(filter) > -1) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    });
};

document.getElementById("searchInput").addEventListener("input", filterTable);