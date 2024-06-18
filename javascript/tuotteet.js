// Fetch the products from tuotteet.json
const fetchProducts = async () => {
    await fetch("../animal_lists/tuotteet.json")
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementsByClassName("products-container");

            data.categories.forEach(kategoria => {
                const categoryDiv = document.createElement("div");
                categoryDiv.className = "product-category";

                const categoryTitleContainer = document.createElement("div");
                categoryTitleContainer.className = "category-title-container";
                const title = document.createElement("h4");
                title.className = "category-title";
                title.textContent = kategoria.categoryName;

                const arrowIcon = document.createElement("img");
                arrowIcon.className = "expand-collapse-category"
                arrowIcon.src = "../media/icons/plus-circle.svg";
                arrowIcon.alt = "expand";
                arrowIcon.style.height = "25px";
                arrowIcon.style.width = "25px";
                arrowIcon.addEventListener("click", function () {
                    var x = this.parentElement;
                    var sibling = x.nextElementSibling;
                    if(sibling.className == "brand-cards-container-hidden"){
                        sibling.className = "brand-cards-container";
                        var icon = this;
                        icon.src = "../media/icons/dash-circle.svg";
                    }
                    else{
                        sibling.className = "brand-cards-container-hidden";
                        var iconn = this;
                        iconn.src = "../media/icons/plus-circle.svg";
                    }
                });

                categoryTitleContainer.appendChild(title);
                categoryTitleContainer.appendChild(arrowIcon);

                categoryDiv.appendChild(categoryTitleContainer);

                const brandCardsContainer = document.createElement("div");
                brandCardsContainer.className = "brand-cards-container-hidden"
                categoryDiv.appendChild(brandCardsContainer)

                productsContainer[0].appendChild(categoryDiv);

                data.brandList.forEach(merkki => {
                    let brandContainer = document.getElementsByClassName("brand-cards-container-hidden");
                    if (kategoria.categoryId == merkki.categoryId) {
                        var card = document.createElement("div");
                        card.classList.add("product-card");

                        var productInfo = document.createElement("div");
                        productInfo.classList.add("product-info");
                        var brandName = document.createElement("h3");
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