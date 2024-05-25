
// Fetch the fishes from kalat.json
const fetchFishes = async () => {
    await fetch("../kalalista.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("table-last-updated").textContent = `Kalalista päivitetty ${data.lastUpdated}`;
            const tableBody = document.getElementById("table-body");

            // Fill the fishes table
            data.fishList.forEach(fish => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.textContent = fish.name;
                const scientificNameCell = document.createElement("td");
                scientificNameCell.textContent = fish.scientificName;
                row.appendChild(nameCell);
                row.appendChild(scientificNameCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the fish list:', error));
};
fetchFishes();

// Search feature for the fish table, works with eventlistener
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
            const scientificNameText = scientificNameCell.textContent.toUpperCase();
            if (nameText.indexOf(filter) > -1 || scientificNameText.indexOf(filter) > -1) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    });
};

document.getElementById("searchInput").addEventListener("input", filterTable);