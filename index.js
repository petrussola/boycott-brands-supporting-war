window.addEventListener("load", findProducts);

const mainContent = document.querySelector(".main__content");

var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function () {
    findProducts();
  });
});

const slogan =
  "By refusing to exit the Russian market, Nestlé is supporting the war in Ukraine. Buy something else.";

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true,
});

function checkBoycottedProduct(text) {
  return boycottedProducts.some((product) =>
    text.includes(product.toLowerCase())
  );
}

function findProducts() {
  const products = document.querySelectorAll(".product-tile-wrapper");
  products.forEach((item) => {
    const productDescription = item.innerText.toLowerCase();
    if (checkBoycottedProduct(productDescription)) {
      // adds border to the product tile
      item.style.border = "4px solid red";

      const banner = document.createElement("div");
      banner.textContent = slogan;
      banner.classList.add("banner");
      const addProductControls = item.querySelector(
        ".product-controls__wrapper"
      );
      addProductControls &&
        addProductControls.parentNode.replaceChild(banner, addProductControls);

      // hides any promotion for the product
      const promo = document.querySelector(".promotions-wrapper");
      const offer = document.querySelector(".special-offer-sash");
      const sponsored = document.querySelector(
        ".styled__FlashSashContent-sc-9znnul-0"
      );
      promo && promo.remove();
      offer && offer.remove();
      sponsored && sponsored.remove();
    }
  });
}

var boycottedProducts = [
  "Nestle",
  "Nestlé",
  "Cerelac",
  "Gerber",
  "NaturNes",
  "Pure Life",
  "Perrier",
  "Pellegrino",
  "Cheerios",
  "Fitness",
  "Lion",
  "Nesquik",
  "Aero",
  "Cailler",
  "KitKat",
  "Milkybar",
  "Les Recettes de l'Atelier",
  "Orion",
  "Quality Street",
  "Smarties",
  "Toll House",
  "Blue Bottle Coffee",
  "Nescafé Dolce Gusto",
  "Nescafe Dolce Gusto",
  "Nespresso",
  "Starbucks",
  "Buitoni",
  "Herta",
  "Hot Pockets",
  "Lean Cuisine",
  "Maggi",
  "Stouffer",
  "Thomy",
  "Carnation",
  "Coffee-Mate",
  "La Laitière",
  "La Laitiere",
  "Nido",
  "Milo",
  "Nestea",
  "Chef",
  "Chef-Mate",
  "Chef Mate",
  "Maggi",
  "Milo",
  "Minor's",
  "Nescafé",
  "Nescafe",
  "Nestea",
  "Sjora",
  "Lean Cuisine",
  "Stouffer's",
  "Stouffer",
  "Boost",
  "Nutren Junior",
  "Peptamen",
  "Resource",
  "Dreyer's",
  "Dreyer",
  "Extrême",
  "Extreme",
  "Häagen-Dazs",
  "Haagen-Dazs",
  "Haagen Dazs",
  "Mövenpick",
  "Movenpick",
  "Nestlé Ice Cream",
  "Nestle Ice Cream",
  "Alpo",
  "Bakers Complete",
  "Beneful",
  "Cat Chow",
  "Dog Chow",
  "Fancy Feast",
  "Felix",
  "Friskies",
  "Gourmet",
  "Purina",
  "Purina ONE",
  "Pro Plan",
];
