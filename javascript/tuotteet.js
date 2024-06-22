let brandsObject = {};
// Fetch the products from tuotteet.json
const fetchProducts = async () => {
    // TO DO: jos tuotteita 8, sillon ei lisätä lataa lisää -painiketta. Kun painiketta painettu, se häviää.
    const CardAmount = 8;

    await fetch("../animal_lists/tuotteet.json")
        .then(response => response.json())
        .then(data => {
            brandsObject = data.brandList;
            const productsContainer = document.getElementsByClassName("products-container");

            data.categories.forEach(kategoria => {
                let cardIndex = 0;
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
                let brandContainer = document.getElementsByClassName("brand-cards-container-hidden");
                data.brandList.forEach(merkki => {
                    
                    if (kategoria.categoryId == merkki.categoryId && cardIndex < CardAmount) {
                        var card = document.createElement("div");
                        card.classList.add("product-card");
                        let categoryName = "categoryId-" + kategoria.categoryId;
                        card.classList.add(categoryName);

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
                        cardIndex++;
                        if(cardIndex == CardAmount && getCount(kategoria.categoryId) > CardAmount){
                            var loadMoreCard = document.createElement("div");
                            loadMoreCard.classList.add("product-card");
                            var loadMoreInfo = document.createElement("div");
                            loadMoreInfo.classList.add("product-info");
                            var loadMoreText = document.createElement("h3");
                            loadMoreText.innerText = "Lataa lisää";

                            loadMoreCard.addEventListener("click", function () {
                                let index = 1;
                                let previousSibling = this.previousElementSibling;
                                let previousSiblingClass = previousSibling.className;
                                let splittedClasses = previousSiblingClass.split(" ");

                                let categoryIdClass = splittedClasses.filter(element => element.includes("categoryId"));
                                let categoryCount = document.getElementsByClassName(categoryIdClass[0]).length
                                let categoryIdSplitted = categoryIdClass[0].split("-");
                                let id = categoryIdSplitted[1];

                                let brandContainer = this.parentElement;
                                data.brandList.forEach(merkki => {
                                    if(merkki.categoryId == id && index > categoryCount){
                                        var card = document.createElement("div");
                                        card.classList.add("product-card");
                                        let categoryName = "categoryId-" + kategoria.categoryId;
                                        card.classList.add(categoryName);

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

                                        brandContainer.append(card);
                                    } else if (merkki.categoryId == id){
                                        index++;
                                    }
                                });
                                this.remove();
                            })

                            loadMoreInfo.appendChild(loadMoreText);
                            loadMoreCard.append(loadMoreInfo);
                            brandContainer[kategoria.categoryId -1].append(loadMoreCard);
                        }
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching the fish list:', error));
};

function getCount(id){
    let count = 0;
    brandsObject.forEach(brand => {
        if(brand.categoryId == id){
            count++;
        }
    })
    return count;
}
fetchProducts();