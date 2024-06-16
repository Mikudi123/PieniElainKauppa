// Fetch the products from tuotteet.json
const fetchProducts = async () => {
    await fetch("../animal_lists/tuotteet.json")
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementsByClassName("products-container");

            data.categories.forEach(kategoria => {
                const categoryDiv = document.createElement("div");
                categoryDiv.className = "product-category";

                const title = document.createElement("h4");
                title.textContent = kategoria.categoryName;
                categoryDiv.appendChild(title);

                const brandCardsContainer = document.createElement("div");
                brandCardsContainer.className = "brand-cards-container"
                categoryDiv.appendChild(brandCardsContainer)

                productsContainer[0].appendChild(categoryDiv);

                data.brandList.forEach(merkki => {
                    let brandContainer = document.getElementsByClassName("brand-cards-container");
                    if (kategoria.categoryId == merkki.categoryId) {
                        var card = document.createElement("div");
                        card.classList.add("product-card");

                        var productInfo = document.createElement("div");
                        productInfo.classList.add("product-info");
                        var brandName = document.createElement("h2");
                        brandName.innerText = merkki.brandName;

                        var productWebsite = document.createElement("div");
                        productWebsite.className = "product-website";
                        var link = document.createElement("a");
                        link.href = merkki.website;
                        link.target = "_blank";
                        link.textContent = "valmistajan sivulle"

                        productInfo.appendChild(brandName);
                        productWebsite.appendChild(link);

                        card.append(productInfo);
                        card.append(productWebsite);

                        brandContainer[kategoria.categoryId -1].append(card);
                    }
                })
            });
        })
        .catch(error => console.error('Error fetching the fish list:', error));
};
fetchProducts();