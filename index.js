var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function () {
    chooseHost();
  });
});

mutationObserver.observe(document.documentElement, {
  attributes: false,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: false,
  characterDataOldValue: true,
});

let boycottedCompanies = [];

function checkBoycottedProduct(productName) {
  const brands = Object.keys(brandsAndOwner);
  const isBoycottedBrandFound = brands.some((brand) => {
    const productNameMatchBrand = productName.includes(brand.toLowerCase());
    if (
      productNameMatchBrand &&
      !boycottedCompanies.includes(brandsAndOwner[brand])
    ) {
      boycottedCompanies.push(brandsAndOwner[brand]);
    }
    return productNameMatchBrand;
  });
  return isBoycottedBrandFound;
}

function appendFooter(tileClasses) {
  // build formatted string with list of boycotted companies
  const boycottedCompaniesText =
    boycottedCompanies.length > 1
      ? boycottedCompanies
          .slice(0, -1)
          .join(", ")
          .concat(" and ", boycottedCompanies.slice(-1))
      : boycottedCompanies[0];
  const footer = document.createElement("div");
  const flag = document.createElement("div");
  const text = document.createElement("div");
  const close = document.createElement("div");
  flag.innerText = "🇺🇦";
  flag.ariaRoleDescription = "Ukrainian Flag";
  flag.ariaLabel = "Ukrainian Flag";
  flag.role = "img";
  text.innerHTML = `By refusing to exit the Russian market, ${boycottedCompaniesText} ${
    boycottedCompanies.length > 1 ? "are" : "is"
  } supporting the war in Ukraine. Their products have been blurred. Please choose something else. <a href="https://github.com/petrussola/boycott-brands-supporting-war/blob/blur/README.md" target="_blank" rel="noopener noreferrer">Read more</a>`;
  close.classList.add("close-button");
  close.innerText = "Close";
  close.addEventListener("click", hideFooter);
  footer.appendChild(flag);
  footer.appendChild(text);
  footer.appendChild(close);
  footer.classList.add("ukraine-footer");
  const productTiles = document.querySelectorAll(...tileClasses);
  const productArray = Array.from(productTiles).some((tile) =>
    checkBoycottedProduct(tile.innerText.toLowerCase())
  );
  if (productArray) {
    document.body.appendChild(footer);
  }
}

function hideFooter() {
  const footer = document.querySelector(".ukraine-footer");
  footer.style.display = "none";
}

function findProducts2(tileClasses) {
  const productTiles = document.querySelectorAll(...tileClasses);

  productTiles.forEach((item) => {
    const productDescription = item.innerText.toLowerCase();
    if (checkBoycottedProduct(productDescription)) {
      item.classList.add("blurred");
    }
  });
  const footerExists = document.querySelector(".ukraine-footer");
  if (!footerExists) {
    appendFooter(tileClasses);
  }
}

const supermarket = window.location.hostname;
function chooseHost() {
  switch (supermarket) {
    case "www.tesco.com":
      findProducts2([".product-list--list-item", ".product-tile-wrapper"]);
      break;
    case "www.tesco.ie":
      findProducts2([".product-list--list-item", ".product-tile-wrapper"]);
      break;
    case "www.ocado.com":
      findProducts2([".fops-item"]);
      break;
    case "shop.supervalu.ie":
      findProducts2([".product-list-item"]);
      break;
    case "www.sainsburys.co.uk":
      findProducts2([".pt-grid-item"]);
      break;
    case "groceries.asda.com":
      findProducts2([".co-item"]);
      break;
    case "groceries.morrisons.com":
      findProducts2([".fop-item"]);
      break;
    case "www.iceland.co.uk":
      findProducts2([".product-tile"]);
      break;
    case "shop.jiffygrocery.co.uk":
      findProducts2([".product-item"]);
      break;
    case "groceries.aldi.co.uk":
      findProducts2([".product-tile"]);
      break;
    case "www.amazon.co.uk":
      findProducts2([".s-result-item"]);
      break;
    // more difficult DOM observation
    // case 'www.waitrose.com/':
    //   findProducts2(['.pt-grid-item']);
    //   break;
    default:
      return;
  }
}

const brandsAndOwner = {
  Nestle: "Nestlé",
  Nestlé: "Nestlé",
  Cerelac: "Nestlé",
  Gerber: "Nestlé",
  NaturNes: "Nestlé",
  "Pure Life": "Nestlé",
  Perrier: "Nestlé",
  Pellegrino: "Nestlé",
  Cheerios: "Nestlé",
  Fitness: "Nestlé",
  Lion: "Nestlé",
  Nesquik: "Nestlé",
  Aero: "Nestlé",
  Cailler: "Nestlé",
  KitKat: "Nestlé",
  Milkybar: "Nestlé",
  "Les Recettes de l'Atelier": "Nestlé",
  Orion: "Nestlé",
  "Quality Street": "Nestlé",
  Smarties: "Nestlé",
  "Toll House": "Nestlé",
  "Blue Bottle Coffee": "Nestlé",
  "Nescafé Dolce Gusto": "Nestlé",
  "Nescafe Dolce Gusto": "Nestlé",
  Nespresso: "Nestlé",
  Starbucks: "Nestlé",
  Buitoni: "Nestlé",
  Herta: "Nestlé",
  "Hot Pockets": "Nestlé",
  "Lean Cuisine": "Nestlé",
  Maggi: "Nestlé",
  Stouffer: "Nestlé",
  Thomy: "Nestlé",
  Carnation: "Nestlé",
  "Coffee-Mate": "Nestlé",
  "La Laitière": "Nestlé",
  "La Laitiere": "Nestlé",
  Nido: "Nestlé",
  Milo: "Nestlé",
  Nestea: "Nestlé",
  Chef: "Nestlé",
  "Chef-Mate": "Nestlé",
  "Chef Mate": "Nestlé",
  Maggi: "Nestlé",
  Milo: "Nestlé",
  "Minor's": "Nestlé",
  Nescafé: "Nestlé",
  Nescafe: "Nestlé",
  Nestea: "Nestlé",
  Sjora: "Nestlé",
  "Lean Cuisine": "Nestlé",
  "Stouffer's": "Nestlé",
  Stouffer: "Nestlé",
  Boost: "Nestlé",
  "Nutren Junior": "Nestlé",
  Peptamen: "Nestlé",
  Resource: "Nestlé",
  "Dreyer's": "Nestlé",
  Dreyer: "Nestlé",
  Extrême: "Nestlé",
  Extreme: "Nestlé",
  "Häagen-Dazs": "Nestlé",
  "Haagen-Dazs": "Nestlé",
  "Haagen Dazs": "Nestlé",
  Mövenpick: "Nestlé",
  Movenpick: "Nestlé",
  "Nestlé Ice Cream": "Nestlé",
  "Nestle Ice Cream": "Nestlé",
  Alpo: "Nestlé",
  "Bakers Complete": "Nestlé",
  Beneful: "Nestlé",
  "Cat Chow": "Nestlé",
  "Dog Chow": "Nestlé",
  "Fancy Feast": "Nestlé",
  Felix: "Nestlé",
  Friskies: "Nestlé",
  Gourmet: "Nestlé",
  Purina: "Nestlé",
  "Purina ONE": "Nestlé",
  "Pro Plan": "Nestlé",
};
