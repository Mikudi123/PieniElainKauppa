// Fetch the services from services.json
const fetchServices = async () => {
    await fetch("../services.json")
        .then(response => response.json())
        .then(data => {
            const servicesBody = document.getElementById("services-container");

            // Fill the services list
            data.serviceList.forEach(service => {
                // Service
                const serviceList = document.createElement("ul");
                serviceList.classList.add("small-text");
                serviceList.classList.add("spacing-top");

                // Service title/name
                const serviceTitle = document.createElement("p");
                serviceTitle.classList.add("medium-text");
                serviceTitle.classList.add("service-title");
                serviceTitle.innerHTML = `<strong>${service.name}</strong>`;
                serviceList.appendChild(serviceTitle);
                
                // Service description items
                if (service.descriptionItems) {
                    service.descriptionItems.forEach(item => {
                        const serviceItem = document.createElement("li");
                        serviceItem.innerHTML = item;
                        serviceList.appendChild(serviceItem);
                    });
                }

                // Create service
                servicesBody.appendChild(serviceList);
            });
        })
        .catch(error => console.error('Error fetching the service list:', error));
};
fetchServices();