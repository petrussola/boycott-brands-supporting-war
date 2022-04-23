window.addEventListener("load", () => {
  console.log("Dom loaded");
  // get the class names
  const { mainContentClass, productTileClass, tileProp } = getClassNames();
  // observe the content tag - add children
  observeDomChanges(mainContentClass, productTileClass, tileProp);
});

function getClassNames() {
  const supermarket = window.location.hostname;
  switch (supermarket) {
    case "www.tesco.ie":
      return {
        mainContentClass: ["body", "main__content"],
        productTileClass: "product-list--list-item",
        tileProp: "textContent",
      };
    case "www.tesco.com":
      return {
        mainContentClass: ["body", "main__content"],
        productTileClass: "product-list--list-item",
        tileProp: "textContent",
      };
    case "www.ocado.com":
      return {
        mainContentClass: ["app-page", "main-column"],
        productTileClass: "fops-item",
        tileProp: "textContent",
      };
    case "shop.supervalu.ie":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-list-item",
        tileProp: "textContent",
      };
    case "www.sainsburys.co.uk":
      return {
        mainContentClass: ["SRF__tileList", "shelfPage"],
        // in some cases i.e. pepsi the product tile class is "product"
        productTileClass: "pt-grid-item",
        tileProp: "textContent",
      };
    case "groceries.asda.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "co-item",
        tileProp: "textContent",
      };
    case "groceries.morrisons.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "fop-item",
        tileProp: "textContent",
      };
    case "www.iceland.co.uk":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-tile",
        tileProp: "textContent",
      };
    case "shop.jiffygrocery.co.uk":
      return {
        mainContentClass: ["w-100p w-min-320"],
        productTileClass: "product-item",
        tileProp: "textContent",
      };
    case "groceries.aldi.co.uk":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-tile",
        tileProp: "textContent",
      };
    case "www.amazon.co.uk":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClass: "s-result-item",
        tileProp: "innerText",
      };
    case "www.compraonline.bonpreuesclat.cat":
      return {
        mainContentClass: ["layout__Container-sc-1cgl98j-0"],
        productTileClass: "box__Box-sc-4y5e6z-0",
        tileProp: "textContent",
      };
    case "www.dia.es":
      return {
        mainContentClass: ["pageType-ContentPage"],
        productTileClass: "product-list__item",
        tileProp: "textContent",
      };
    case "www.alcampo.es":
      return {
        mainContentClass: ["body"],
        productTileClass: " productGridItemContainer ",
        tileProp: "innerText",
      };
    case "www.carrefour.es":
      return {
        mainContentClass: ["ebx-result-figure"],
        productTileClass: "ebx-result",
        tileProp: "textContent",
      };
    case "www.dunnesstoresgrocery.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "ColListing-sc-lcurnl",
        tileProp: "textContent",
      };
    case "freshonline.ie":
      return {
        mainContentClass: ["warehouse--v1"],
        productTileClass: "product-item",
        tileProp: "innerText",
      };
    case "supermercado.eroski.es":
      return {
        mainContentClass: ["inbenta--eroski"],
        productTileClass: "product-item-lineal",
        tileProp: "innerText",
      };
    case "www.waitrose.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "productPod___yz0mm",
        tileProp: "textContent",
      };
    case "zakupy.auchan.pl":
      return {
        mainContentClass: ["body"],
        productTileClass: "_48TB",
        tileProp: "textContent",
      };
    case "www.frisco.pl":
      return {
        mainContentClass: ["catalog-page"],
        productTileClass: "product-box",
        tileProp: "textContent",
      };
    case "www.alza.sk":
      return {
        mainContentClass: ["body"],
        productTileClass: "browsingitem",
        tileProp: "textContent",
      };
    case "www.mall.sk":
      return {
        mainContentClass: ["body"],
        productTileClass: "category-products__item",
        tileProp: "textContent",
      };
    case "potravinydomov.itesco.sk":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-list--list-item",
        tileProp: "textContent",
      };
    case "www.kaufland.ro":
      return {
        mainContentClass: ["body"],
        productTileClass: "t-search-result__list-item",
        tileProp: "textContent",
      };
    case "carrefour.ro":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-item",
        tileProp: "textContent",
      };
    case "www.mega-image.ro":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-item",
        tileProp: "textContent",
      };
    case "produse.metro.ro":
      return {
        mainContentClass: ["body", "mfcss"],
        productTileClass: "mfcss_article-wrapper",
        tileProp: "textContent",
      };
    case "www.auchan.ro":
      return {
        mainContentClass: ["body"],
        productTileClass: "prefixbox-product-container",
        tileProp: "textContent",
      };
    case "www.rewe.de":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-card",
        tileProp: "textContent",
      };
    case "www.amazon.de":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClass: "s-result-item",
        tileProp: "innerText",
      };
    case "www.flaschenpost.de":
      return {
        mainContentClass: ["body"],
        productTileClass: "fp_product",
        tileProp: "textContent",
      };
    case "www.bringmeister.de":
      return {
        mainContentClass: ["body", "css-vherbg"],
        productTileClass: "styles_productwrapper__2UcI7",
        tileProp: "textContent",
      };
    case "www.lidl.de":
      return {
        mainContentClass: ["body"],
        productTileClass: "s-grid__item",
        tileProp: "textContent",
      };
    case "ecoop.ee":
      return {
        mainContentClass: ["products-wrapper"],
        productTileClass: "item",
        tileProp: "textContent",
      };
    case "www.rimi.ee":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-grid__item",
        tileProp: "textContent",
      };
    case "www.selver.ee":
      return {
        mainContentClass: ["body", "products-view"],
        productTileClass: "ProductCard",
        tileProp: "textContent",
      };
    case "www.prismamarket.ee":
      return {
        mainContentClass: ["body", "page"],
        productTileClass: "item",
        tileProp: "textContent",
      };
    case "barbora.lv":
      return {
        mainContentClass: ["body"],
        productTileClass: "b-product--wrap2",
        tileProp: "textContent",
      };
    case "www.rimi.lv":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-grid__item",
        tileProp: "textContent",
      };
    case "etop.lv":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-grid",
        tileProp: "textContent",
      };
    case "etoppiegade.lv":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-grid",
        tileProp: "textContent",
      };
    case "rezekne.citro.lv":
      return {
        mainContentClass: ["body"],
        productTileClass: "product",
        tileProp: "textContent",
      };
    case "ventspils.citro.lv":
      return {
        mainContentClass: ["body"],
        productTileClass: "product",
        tileProp: "textContent",
      };
    case "www.drogas.lv":
      return {
        mainContentClass: ["body"],
        productTileClass: "plp-product-grid__item",
        tileProp: "textContent",
      };
    case "lastmile.lt":
      return {
        mainContentClass: ["body", "css-y2x73b"],
        productTileClass: "css-1o99j7c",
        tileProp: "textContent",
      };
    case "parduotuve.ciamarket.lt":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-miniature",
        tileProp: "textContent",
      };
    case "www.eurokos.lt":
      return {
        mainContentClass: ["body"],
        productTileClass: "col-sm-4",
        tileProp: "textContent",
      };
    case "vynoteka.lt":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-card__wrapper",
        tileProp: "textContent",
      };
    case "www.rimi.lt":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-grid__item",
        tileProp: "textContent",
      };
    case "www.k-ruoka.fi":
      return {
        mainContentClass: ["body", "product-search-result-list"],
        productTileClass: "bundle-list-item",
        tileProp: "textContent",
      };
    case "www.alko.fi":
      return {
        mainContentClass: ["body"],
        productTileClass: "mini-card-wrap",
        tileProp: "textContent",
      };
    case "www.s-kaupat.fi":
      return {
        mainContentClass: ["body", "sc-1z3de1-1"],
        productTileClass: "sc-1ts9eyk-3",
        tileProp: "textContent",
      };
    case "www.foodie.fi":
      return {
        mainContentClass: ["body", "js-products-container"],
        productTileClass: "item",
        tileProp: "textContent",
      };
    case "www.tokmanni.fi":
      return {
        mainContentClass: ["body"],
        productTileClass: "kuName",
        tileProp: "textContent",
      };
    case "www.citygross.se":
      return {
        mainContentClass: [
          "body",
          "m-searchresultpage__content",
          "product-image",
        ],
        productTileClass: "productcard-container",
        tileProp: "textContent",
      };
    case "www.coop.se":
      return {
        mainContentClass: ["body", "Section"],
        productTileClass: "Grid-cell",
        tileProp: "textContent",
      };
    case "www.ica.se":
      return {
        mainContentClass: ["body", "sc-hxaKgE"],
        productTileClass: "sc-gIBoTZ",
        tileProp: "textContent",
      };
    case "www.willys.se":
      return {
        mainContentClass: ["Gridstyles__StyledGrid-sc-p13gvi-0"],
        productTileClass: "Productstyles__StyledProduct-sc-16nua0l-0",
        tileProp: "textContent",
      };
    case "www.hemkop.se":
      return {
        mainContentClass: ["body", "ax-layout-content"],
        productTileClass: "ax-product-grid-tile",
        tileProp: "textContent",
      };
    case "www.hipercor.es":
      return {
        mainContentClass: ["more_results"],
        productTileClass: "grid-item",
        tileProp: "textContent",
      };
    case "www.elcorteingles.es":
      return {
        mainContentClass: ["more_results"],
        productTileClass: "grid-item",
        tileProp: "textContent",
      };
    case "compraonline.e-leclerc.es":
      return {
        mainContentClass: ["more_results"],
        productTileClass: "grid-item",
        tileProp: "textContent",
      };
    default:
      return {
        mainContentClass: "",
        productTileClass: "",
        tileProp: "",
      };
  }
}

function findContentTag(contentTarget) {
  // contentTarget is an array, so we map over it
  // and save the closures
  const results = contentTarget.map((ct) => {
    switch (ct) {
      case "body":
        return (mutation) => mutation.target.localName === ct;
      default:
        return (mutation) => mutation.target.className.includes(ct);
    }
  });
  return results;
}

function observeDomChanges(contentClassName, productTileClassName, tileProp) {
  const targetFinder = findContentTag(contentClassName);
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      console.log(mutation);
      if (
        mutation.type === "childList" &&
        (!mutation.previousSibling ||
          mutation.previousSibling.className !== "ukraine-footer")
      ) {
        // iterate over closures and check if
        // there is one that returns true
        targetFinder.forEach((tf) => {
          // if check is true, we proceed
          if (tf(mutation)) {
            console.log(mutation);
            // highlight products
            const listBoycottedCompanies = applyBoycott(
              productTileClassName,
              tileProp
            );
            // action banner
            listBoycottedCompanies.length > 0
              ? showFooter(listBoycottedCompanies)
              : hideFooter();
          }
        });
      }
    });
  });

  observer.observe(document.body, { subtree: true, childList: true });
}

function applyBoycott(productTileClassName, tileProp) {
  const boycottedCompanies = [];
  const productTiles = document.getElementsByClassName(productTileClassName);
  Array.from(productTiles).forEach((tile) => {
    const tileText = tile[tileProp].toLowerCase();
    const matchedBrand = isBrandFoundInText(tileText);
    if (matchedBrand) {
      const index = tileText.indexOf(matchedBrand.toLowerCase());
      const contextText = tileText.slice(
        index === 0 ? index : index - 20,
        index + matchedBrand.length + 20
      );
      console.log(
        matchedBrand,
        " < ",
        contextText,
        " < ",
        brandsOwnersMap[matchedBrand]
      );
      applyBlur(tile);
      addCompanyToBoycottedList(
        brandsOwnersMap[matchedBrand],
        boycottedCompanies
      );
    }
  });
  return boycottedCompanies;
}

function isBrandFoundInText(text) {
  // get array from brands
  const brands = Object.keys(brandsOwnersMap);
  // iterate over brand and return boolean depending
  // on whether brand has been found in text or not
  const matchedBrand = brands.find((brand) =>
    text.includes(brand.toLowerCase())
  );
  return matchedBrand;
}

function applyBlur(node) {
  node.classList.add("blurred");
}

function addCompanyToBoycottedList(name, list) {
  if (list.indexOf(name) === -1) {
    list.push(name);
  }
  return;
}

function showFooter(listCompanies) {
  const formattedListCompanies =
    listCompanies.length > 1
      ? listCompanies
          .slice(0, -1)
          .join(", ")
          .concat(" and ", listCompanies.slice(-1))
      : listCompanies[0];

  const footer = document.createElement("div");
  const flag = document.createElement("div");
  const text = document.createElement("div");
  const close = document.createElement("div");
  flag.innerText = "🇺🇦";
  flag.ariaRoleDescription = "Ukrainian Flag";
  flag.ariaLabel = "Ukrainian Flag";
  flag.role = "img";
  text.innerHTML = `By refusing to exit the Russian market, ${formattedListCompanies} ${
    listCompanies.length > 1 ? "are" : "is"
  } supporting the war in Ukraine. Their products have been blurred. Please choose something else. <a href="https://github.com/petrussola/boycott-brands-supporting-war/blob/main/README.md" target="_blank" rel="noopener noreferrer">Read more</a>`;
  close.classList.add("close-button");
  close.innerText = "Close";
  close.addEventListener("click", hideFooter);
  footer.appendChild(flag);
  footer.appendChild(text);
  footer.appendChild(close);
  footer.classList.add("ukraine-footer");
  document.body.appendChild(footer);
}

function hideFooter() {
  const footerCollection = document.getElementsByClassName("ukraine-footer");
  Array.from(footerCollection).forEach((footer) => {
    footer.remove();
  });
}

const brandsOwnersMap = {
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
  Danone: "Danone",
  Activia: "Danone",
  Oykos: "Danone",
  Prostokvashino: "Danone",
  Oikos: "Danone",
  Delight: "Danone",
  Danonino: "Danone",
  "Silk danone": "Danone",
  "Silk cashew": "Danone",
  "Silk coconut": "Danone",
  "Silk almond": "Danone",
  "Silk dairy": "Danone",
  "Silk soymilk": "Danone",
  "Silk protein": "Danone",
  "Silk creamer": "Danone",
  Alpro: "Danone",
  Actimel: "Danone",
  "Aqua water": "Danone",
  Bonafont: "Danone",
  Evian: "Danone",
  Volvic: "Danone",
  Salus: "Danone",
  Hayat: "Danone",
  Mizone: "Danone",
  "zywiec zdroj": "Danone",
  "zywiec-zdroj": "Danone",
  "Żywiec Zdrój": "Danone",
  "Żywiec-Zdrój": "Danone",
  "Font Vella": "Danone",
  Aptamil: "Danone",
  Danette: "Danone",
  Danio: "Danone",
  Dannon: "Danone",
  Danonino: "Danone",
  Nutricia: "Danone",
  Nutrilon: "Danone",
  Bledina: "Danone",
  Blédina: "Danone",
  Bonafont: "Danone",
  "Cow & Gate": "Danone",
  "Happy Family": "Danone",
  "Horizon Organic": "Danone",
  Mizone: "Danone",
  Damavand: "Danone",
  Milupa: "Danone",
  Aptamil: "Danone",
  "Light & Free": "Danone",
  "Light and Free": "Danone",
  Harrogate: "Danone",
  Danacol: "Danone",
  Danette: "Danone",
  Danio: "Danone",
  Dany: "Danone",
  Fjord: "Danone",
  Gervita: "Danone",
  Hipro: "Danone",
  Jockey: "Danone",
  "Recette cremeuse": "Danone",
  Veloute: "Danone",
  Yoothie: "Danone",
  Badoit: "Danone",
  "La salvetat": "Danone",
  Bacardi: "Bacardí",
  Bacardí: "Bacardí",
  Pepsi: "Pepsico",
  Lays: "Pepsico",
  "Lay's": "Pepsico",
  "Mtn Dew": "Pepsico",
  "Mountain Dew": "Pepsico",
  Doritos: "Pepsico",
  Gatorade: "Pepsico",
  Tropicana: "Pepsico",
  "Quaker Oats": "Pepsico",
  Lipton: "Pepsico",
  Frapuccino: "Pepsico",
  Aquafina: "Pepsico",
  Ruffles: "Pepsico",
  Cheetos: "Pepsico",
  Brisk: "Pepsico",
  Tostitos: "Pepsico",
  Fritos: "Pepsico",
  Pepsi: "Pepsico",
  "Sierra Mist": "Pepsico",
  "7up": "Pepsico",
  "Seven Up": "Pepsico",
  Sevenup: "Pepsico",
  Mirinda: "Pepsico",
  Walkers: "Pepsico",
  Bayer: "Bayer",
  Colgate: "Colgate-Palmolive",
  Palmolive: "Colgate-Palmolive",
  Protex: "Colgate-Palmolive",
  Sanex: "Colgate-Palmolive",
  Softsoap: "Colgate-Palmolive",
  Hills: "Colgate-Palmolive",
  "Hill's": "Colgate-Palmolive",
  Sorriso: "Colgate-Palmolive",
  "Speed Stick": "Colgate-Palmolive",
  Suavitel: "Colgate-Palmolive",
  "Murphy Oil Soap": "Colgate-Palmolive",
  Meridol: "Colgate-Palmolive",
  "Irish Spring": "Colgate-Palmolive",
  "Tom's of Maine": "Colgate-Palmolive",
  "Toms of Maine": "Colgate-Palmolive",
  Tahiti: "Colgate-Palmolive",
  Softlan: "Colgate-Palmolive",
  Ajax: "Colgate-Palmolive",
  Fleecy: "Colgate-Palmolive",
  "Pinho Sol": "Colgate-Palmolive",
  Axion: "Colgate-Palmolive",
  Cuddly: "Colgate-Palmolive",
  "Sta-Soft": "Colgate-Palmolive",
  "Sta Soft": "Colgate-Palmolive",
  Elmex: "Colgate-Palmolive",
  Fabuloso: "Colgate-Palmolive",
  Soupline: "Colgate-Palmolive",
  "Pca skin": "Colgate-Palmolive",
  Filorga: "Colgate-Palmolive",
  Eltamd: "Colgate-Palmolive",
  Danklorix: "Colgate-Palmolive",
  Pringles: "Kellogg's",
  "Coco Pops": "Kellogg's",
  Cocopops: "Kellogg's",
  "Crunchy Nut": "Kellogg's",
  Crunchynut: "Kellogg's",
  Frosties: "Kellogg's",
  Kellogg: "Kellogg's",
  "Corn Flakes": "Kellogg's",
  Krave: "Kellogg's",
  "Nutri-Grain": "Kellogg's",
  NutriGrain: "Kellogg's",
  "Pop Tarts": "Kellogg's",
  Poptarts: "Kellogg's",
  "Rice Krispies": "Kellogg's",
  "Special K": "Kellogg's",
  SpecialK: "Kellogg's",
  Heinz: "Kraft Heinz",
  Kraft: "Kraft Heinz",
  "Oscar Mayer": "Kraft Heinz",
  "Ore-lda": "Kraft Heinz",
  Velveeta: "Kraft Heinz",
  "Smart Ones": "Kraft Heinz",
  Caprisun: "Kraft Heinz",
  "Wattie's": "Kraft Heinz",
  "Kool-Aid": "Kraft Heinz",
  "Kool Aid": "Kraft Heinz",
  "Jell-o": "Kraft Heinz",
  Philadelphia: "Kraft Heinz",
  "Golden Circle": "Kraft Heinz",
  Lunchables: "Kraft Heinz",
  Pudliszki: "Kraft Heinz",
  "Maxwell House": "Kraft Heinz",
  "Grey Poupon": "Kraft Heinz",
  Honig: "Kraft Heinz",
  Plasmon: "Kraft Heinz",
  Quero: "Kraft Heinz",
  "Api fish": "Mars",
  Aquarian: "Mars",
  Buckeye: "Mars",
  Cesar: "Mars",
  Dreamis: "Mars",
  Eukanuba: "Mars",
  Greenies: "Mars",
  Iams: "Mars",
  Nutro: "Mars",
  Pedigree: "Mars",
  "Royal Canin": "Mars",
  Sheba: "Mars",
  Spillers: "Mars",
  Temptations: "Mars",
  Winergy: "Mars",
  Whiskas: "Mars",
  Musketeers: "Mars",
  Altoids: "Mars",
  "American Heritage": "Mars",
  Amicelli: "Mars",
  Balisto: "Mars",
  "Big Red": "Mars",
  Bigred: "Mars",
  Bounty: "Mars",
  Celebrations: "Mars",
  Combos: "Mars",
  Doublemint: "Mars",
  Dove: "Mars",
  Eclipse: "Mars",
  Galaxy: "Mars",
  "Goodness Knows": "Mars",
  "Hubba Bubba": "Mars",
  "Juicy fruit": "Mars",
  "Life savers": "Mars",
  "m&m": "Mars",
  maltesers: "Mars",
  mars: "Mars",
  "milky way": "Mars",
  Orbit: "Mars",
  Skittles: "Mars",
  Starburst: "Mars",
  Twix: "Mars",
  Winterfresh: "Mars",
  "Winter Fresh": "Mars",
  "Wrigleys Extra": "Mars",
  "Extra Peppermint Gum": "Mars",
  "Extra White Gum Bottle": "Mars",
  "Extra Cool Breeze Gum": "Mars",
  "Extra Ice Peppermint": "Mars",
  "Extra White Peppermint": "Mars",
  Airwaves: "Mars",
  Spearmint: "Mars",
  "Ben's": "Mars",
  Dolmio: "Mars",
  Ebly: "Mars",
  Kantong: "Mars",
  Masterfoods: "Mars",
  "Master foods": "Mars",
  Miracoli: "Mars",
  Pamesello: "Mars",
  Raris: "Mars",
  Ráris: "Mars",
  Royco: "Mars",
  "Seeds of Change": "Mars",
  "Suzi wan": "Mars",
  Suziwan: "Mars",
  "tasty bite": "Mars",
  tastybite: "Mars",
  Revels: "Mars",
  Cadbury: "Mondelēz International",
  "Alpen Gold": "Mondelēz International",
  Barni: "Mondelēz International",
  Belvita: "Mondelēz International",
  Bournvita: "Mondelēz International",
  Cadbury: "Mondelēz International",
  "Chips Ahoy": "Mondelēz International",
  Clorets: "Mondelēz International",
  "Club Social": "Mondelēz International",
  "Cote d'or": "Mondelēz International",
  "Côte d'or": "Mondelēz International",
  Dairylea: "Mondelēz International",
  Daim: "Mondelēz International",
  "Enjoy life": "Mondelēz International",
  Freia: "Mondelēz International",
  Halls: "Mondelēz International",
  "Honey maid": "Mondelēz International",
  "Kinh Do": "Mondelēz International",
  Lacta: "Mondelēz International",
  Marabou: "Mondelēz International",
  Maynards: "Mondelēz International",
  Milka: "Mondelēz International",
  Oreo: "Mondelēz International",
  "Perfect Snacks": "Mondelēz International",
  Ritz: "Mondelēz International",
  "Royal Baking Powder": "Mondelēz International",
  "Sour Patch Kids": "Mondelēz International",
  Stride: "Mondelēz International",
  Tang: "Mondelēz International",
  "Tate's Bake Shop": "Mondelēz International",
  Tiger: "Mondelēz International",
  Toblerone: "Mondelēz International",
  Trident: "Mondelēz International",
  Triscuit: "Mondelēz International",
  Tuc: "Mondelēz International",
  "Wheat Thins": "Mondelēz International",
  Marlboro: "Philip Morris",
  Iqos: "Philip Morris",
  Aussie: "Procter & Gamble",
  "Head & Shoulders": "Procter & Gamble",
  "Herbal Essence": "Procter & Gamble",
  Olay: "Procter & Gamble",
  "SK-II": "Procter & Gamble",
  Pantene: "Procter & Gamble",
  Pampers: "Procter & Gamble",
  Always: "Procter & Gamble",
  Tampax: "Procter & Gamble",
  Ariel: "Procter & Gamble",
  "Bold 2in1": "Procter & Gamble",
  "Bold 2 in 1": "Procter & Gamble",
  Daz: "Procter & Gamble",
  Fairy: "Procter & Gamble",
  Lenor: "Procter & Gamble",
  "Ambi Pur": "Procter & Gamble",
  Febreze: "Procter & Gamble",
  Viakal: "Procter & Gamble",
  Clearblue: "Procter & Gamble",
  Fixodent: "Procter & Gamble",
  "Old Spice": "Procter & Gamble",
  "Oral-B": "Procter & Gamble",
  "Oral B": "Procter & Gamble",
  "Seven Seas": "Procter & Gamble",
  Vicks: "Procter & Gamble",
  Braun: "Procter & Gamble",
  Gillette: "Procter & Gamble",
  Ausonia: "Procter & Gamble",
  Evax: "Procter & Gamble",
  Dodot: "Procter & Gamble",
  "H&S": "Procter & Gamble",
  "Don Limpio": "Procter & Gamble",
  Swiffer: "Procter & Gamble",
  "Dash 2en1": "Procter & Gamble",
  "La Recette Essentielle": "Procter & Gamble",
  "Bear Fruits": "Procter & Gamble",
  "Mr Propre": "Procter & Gamble",
  Dash: "Procter & Gamble",
  "Mastro Lindo": "Procter & Gamble",
  Kukident: "Procter & Gamble",
  ZzzQUIL: "Procter & Gamble",
  Bion3: "Procter & Gamble",
  "Ben & Jerry": "Unilever",
  "Comfort fabric": "Unilever",
  "Comfort pure": "Unilever",
  "Comfort dermatologically": "Unilever",
  "Comfort ultra": "Unilever",
  "Comfort ulmte": "Unilever",
  "Comfort blue": "Unilever",
  "Comfort creations": "Unilever",
  Domestos: "Unilever",
  Dove: "Unilever",
  Hellmann: "Unilever",
  Knorr: "Unilever",
  Lifebuoy: "Unilever",
  Magnum: "Unilever",
  "Omo laundry": "Unilever",
  "Omo sensitive": "Unilever",
  "Omo active": "Unilever",
  "Omo touch": "Unilever",
  Rexona: "Unilever",
  "Seventh Generation": "Unilever",
  Sunsilk: "Unilever",
  "Wall's": "Unilever",
  Bango: "Unilever",
  Axe: "Unilever",
  Cif: "Unilever",
  Comfort: "Unilever",
  "The Vegetarian Butcher": "Unilever",
  Equilibra: "Unilever",
  Olly: "Unilever",
  "Liquid I.V.": "Unilever",
  Smartypants: "Unilever",
  Onnit: "Unilever",
  Vaseline: "Unilever",
  Barilla: "Barilla",
  Voiello: "Barilla",
  Filiz: "Barilla",
  Misko: "Barilla",
  "Yemina Vesta": "Barilla",
  Catelli: "Barilla",
  Lancia: "Barilla",
  "Pasta evangelis": "Barilla",
  "Tolerant organic": "Barilla",
  "Mulino Bianco": "Barilla",
  "Gan cereale": "Barilla",
  "Pan di stelle": "Barilla",
  Pavesi: "Barilla",
  Harrys: "Barilla",
  Wasa: "Barilla",
  Glade: "SC Johnson",
  Oust: "SC Johnson",
  Bayclin: "SC Johnson",
  Bonami: "SC Johnson",
  Ceramicol: "SC Johnson",
  Duck: "SC Johnson",
  Canard: "SC Johnson",
  Pato: "SC Johnson",
  "WC-Ente": "SC Johnson",
  "WC Ente": "SC Johnson",
  Drano: "SC Johnson",
  Fantastik: "SC Johnson",
  "Freedom carpet foam": "SC Johnson",
  Klaro: "SC Johnson",
  Lysoform: "SC Johnson",
  "Mr muscle": "SC Johnson",
  "Mr.muscle": "SC Johnson",
  "Mr musculo": "SC Johnson",
  "Mr.musculo": "SC Johnson",
  Pledge: "SC Johnson",
  Blem: "SC Johnson",
  Bravo: "SC Johnson",
  Pliz: "SC Johnson",
  Pronto: "SC Johnson",
  "Roma coco": "SC Johnson",
  "Scrubbing bubbles": "SC Johnson",
  Windex: "SC Johnson",
  "null null": "SC Johnson",
  Eend: "SC Johnson",
  Autan: "SC Johnson",
  "Off!": "SC Johnson",
  Baygon: "SC Johnson",
  Chemotox: "SC Johnson",
  Fuyi: "SC Johnson",
  Pyrel: "SC Johnson",
  Raid: "SC Johnson",
  Polil: "SC Johnson",
  Ziploc: "SC Johnson",
  Saran: "SC Johnson",
  Salamander: "SC Johnson",
  Woly: "SC Johnson",
  "Grand Prix": "SC Johnson",
  Carnu: "SC Johnson",
  Babyganics: "SC Johnson",
  Caldrea: "SC Johnson",
  Ecover: "SC Johnson",
  Method: "SC Johnson",
  "Mrs meyer": "SC Johnson",
  Andrex: "Kimberly-Clark",
  Huggies: "Kimberly-Clark",
  Goodnites: "Kimberly-Clark",
  Drynites: "Kimberly-Clark",
  "Little Swimmers": "Kimberly-Clark",
  KleenBebe: "Kimberly-Clark",
  "Kleen Bebe": "Kimberly-Clark",
  "Green Finger": "Kimberly-Clark",
  GreenFinger: "Kimberly-Clark",
  Kleenex: "Kimberly-Clark",
  Hakle: "Kimberly-Clark",
  Cottonelle: "Kimberly-Clark",
  Scottex: "Kimberly-Clark",
  Petalo: "Kimberly-Clark",
  Wondersoft: "Kimberly-Clark",
  Scott: "Kimberly-Clark",
  Viva: "Kimberly-Clark",
  "U by Kotex": "Kimberly-Clark",
  Kotex: "Kimberly-Clark",
  Intimus: "Kimberly-Clark",
  Camelia: "Kimberly-Clark",
  WypAll: "Kimberly-Clark",
  Kimtech: "Kimberly-Clark",
  Kleenguard: "Kimberly-Clark",
  Depend: "Kimberly-Clark",
  Poise: "Kimberly-Clark",
  Plenitud: "Kimberly-Clark",
  Bonduelle: "Bonduelle",
  Philips: "Philips",
  Aguila: "AB InBev",
  "Beck's": "AB InBev",
  Becks: "AB InBev",
  Brahma: "AB InBev",
  Budweiser: "AB InBev",
  Cass: "AB InBev",
  Corona: "AB InBev",
  "Eagel Lager": "AB InBev",
  "Hero beer": "AB InBev",
  "Jupiter Beer": "AB InBev",
  Leffe: "AB InBev",
  "Modelo Beer": "AB InBev",
  "Patagonia Beer": "AB InBev",
  "Victoria Beer": "AB InBev",
  "Wals Brut": "AB InBev",
  "7 days": "Chipita",
  "7days": "Chipita",
  Fineti: "Chipita",
  Chipicao: "Chipita",
  Dececco: "De Cecco",
  "De cecco": "De Cecco",
  Borges: "Borges",
  "Capricho Andaluz": "Borges",
  Caramia: "Borges",
  ITLV: "Borges",
  Ortalli: "Borges",
  "H&GSO": "Borges",
  "Healthy & Green Solid": "Borges",
  Agreena: "Borges",
  "Pacific Choice": "Borges",
  Tramier: "Borges",
  "Eco Natura": "Borges",
  Agrifusa: "Grupo Fuertes",
  Cefusa: "Grupo Fuertes",
  Procavi: "Grupo Fuertes",
  "El Pozo": "Grupo Fuertes",
  Elpozo: "Grupo Fuertes",
  Fripozo: "Grupo Fuertes",
  Sediasa: "Grupo Fuertes",
  Palancares: "Grupo Fuertes",
  "Luzon bodegas": "Grupo Fuertes",
  Luzon: "Grupo Fuertes",
  "Aqua Deus": "Grupo Fuertes",
  Aquadeus: "Grupo Fuertes",
  "Douwe Egberts": "JDE Peet's",
  Kenco: "JDE Peet's",
  "Peet's": "JDE Peet's",
  "L'or": "JDE Peet's",
  Stumptown: "JDE Peet's",
  Tassimo: "JDE Peet's",
  Gevalia: "JDE Peet's",
  Pickwick: "JDE Peet's",
  Pilao: "JDE Peet's",
  "Old Town": "JDE Peet's",
  Oldtown: "JDE Peet's",
  Jacobs: "JDE Peet's",
  Moccona: "JDE Peet's",
  "Mighty Leaf": "JDE Peet's",
  Tiora: "JDE Peet's",
  "Peet's": "JDE Peet's",
  Président: "Lactalis",
  President: "Lactalis",
  Galbani: "Lactalis",
  Lactel: "Lactalis",
  Bridel: "Lactalis",
  Ambassador: "Lactalis",
  Santal: "Lactalis",
  Societé: "Lactalis",
  Societe: "Lactalis",
  Seriously: "Lactalis",
  Pauls: "Lactalis",
  Laicran: "Lactalis",
  QBB: "Lactalis",
  Valbreso: "Lactalis",
  Smeds: "Lactalis",
  Parmalat: "Lactalis",
  Puleva: "Lactalis",
  Picot: "Lactalis",
  Milumel: "Lactalis",
  Celia: "Lactalis",
  Bridelight: "Lactalis",
  "Chaussee Moines": "Lactalis",
  "Chaussée Moines": "Lactalis",
  Istara: "Lactalis",
  Lanquetot: "Lactalis",
  Roitelet: "Lactalis",
  "Lou Perac": "Lactalis",
  "Lou Pérac": "Lactalis",
  Rondele: "Lactalis",
  Rondelé: "Lactalis",
  Rouy: "Lactalis",
  Salakis: "Lactalis",
  Siggit: "Lactalis",
  Babybel: "Lactalis",
  Boursin: "Lactalis",
  Kiri: "Lactalis",
  "Vache qui rit": "Lactalis",
  Leerdammer: "Lactalis",
  Toffifee: "Storck",
  Merci: "Storck",
  Nimm2: "Storck",
  "Nimm 2": "Storck",
  Riesen: "Storck",
  Knoppers: "Storck",
  "Werther's original": "Storck",
  Mamba: "Storck",
  Bendicks: "Storck",
  "Bunte Welt": "Storck",
  Zwack: "Zwack",
  Bouquet: "Anecoop",
  Naturane: "Anecoop",
  "Bouquet Bio": "Anecoop",
  "Bouquet Naturane Zero": "Anecoop",
  "Black Cat": "Anecoop",
  "Nadal Anecoop": "Anecoop",
  "Amatista Moscato": "Anecoop",
  "Icono Merlot": "Anecoop",
  "Icono Cabernet Sauvignon": "Anecoop",
  "Icono Chardonnay": "Anecoop",
  "Icono seleccion": "Anecoop",
  "Icono selección": "Anecoop",
  "Icono Syrah": "Anecoop",
  "Juan de juanes": "Anecoop",
  "lvec blue": "Anecoop",
  "lvec green": "Anecoop",
  "lvec orange": "Anecoop",
  Reymos: "Anecoop",
  "Venta del Puerto": "Anecoop",
  "Vida moscato": "Anecoop",
  Campari: "Campari",
  Carmim: "Carmim",
  Reguengos: "Carmim",
  Olaria: "Carmim",
  Monsaraz: "Carmim",
  Pátria: "Carmim",
  "Terras d'el Rei": "Carmim",
  "Real Grei": "Carmim",
  "Regia Colheita": "Carmim",
  "Régia Colheita": "Carmim",
  "Bom juiz": "Carmim",
  Delonghi: "Delonghi",
  ehrmann: "ehrmann",
  Maseca: "Gruma",
  "Mission tortilla": "Gruma",
  Lacima: "Gruma",
  "La cima": "Gruma",
  Delicados: "Gruma",
  Hochland: "Hochland",
  Almette: "Hochland",
  Grunlander: "Hochland",
  Grünländer: "Hochland",
  "Cathedral city": "Hochland",
  SimplyV: "Hochland",
  "Simply V": "Hochland",
  Patros: "Hochland",
  Valbrie: "Hochland",
  Gervais: "Hochland",
  Valbon: "Hochland",
  Fetaxa: "Hochland",
  Winston: "Japan Tobacco",
  Mevius: "Japan Tobacco",
  Camel: "Japan Tobacco",
  "Benson & Hedges": "Japan Tobacco",
  "Natural American Spirit": "Japan Tobacco",
  Sobraine: "Japan Tobacco",
  "Silk cut": "Japan Tobacco",
  Ploom: "Japan Tobacco",
  "Logic vaping": "Japan Tobacco",
  Tylenol: "Johnson & Johnson",
  Motrin: "Johnson & Johnson",
  Zyrtec: "Johnson & Johnson",
  Benadryl: "Johnson & Johnson",
  Zarbee: "Johnson & Johnson",
  Nicorette: "Johnson & Johnson",
  Calpol: "Johnson & Johnson",
  Codral: "Johnson & Johnson",
  "Doktor mom": "Johnson & Johnson",
  Dolormin: "Johnson & Johnson",
  Frenadol: "Johnson & Johnson",
  Imodium: "Johnson & Johnson",
  ORSL: "Johnson & Johnson",
  Pepcid: "Johnson & Johnson",
  Sudafed: "Johnson & Johnson",
  Visine: "Johnson & Johnson",
  Neutrogena: "Johnson & Johnson",
  Aveeno: "Johnson & Johnson",
  "Dr.Ci:Labo": "Johnson & Johnson",
  Neostrata: "Johnson & Johnson",
  Dabao: "Johnson & Johnson",
  OGX: "Johnson & Johnson",
  "Le petit marsellais": "Johnson & Johnson",
  "Bebe young care": "Johnson & Johnson",
  "Clean & Clear": "Johnson & Johnson",
  Exuviance: "Johnson & Johnson",
  "Labo labo": "Johnson & Johnson",
  Lubriderm: "Johnson & Johnson",
  "Piz buin": "Johnson & Johnson",
  Regaine: "Johnson & Johnson",
  Rogaine: "Johnson & Johnson",
  Sundown: "Johnson & Johnson",
  Listerine: "Johnson & Johnson",
  "Band-Aid": "Johnson & Johnson",
  "Johnson's": "Johnson & Johnson",
  "Aveeno baby": "Johnson & Johnson",
  Carefree: "Johnson & Johnson",
  Desitin: "Johnson & Johnson",
  Neosporin: "Johnson & Johnson",
  "O.B.": "Johnson & Johnson",
  Penaten: "Johnson & Johnson",
  Polysporin: "Johnson & Johnson",
  Stayfree: "Johnson & Johnson",
  "Red Bull": "Red Bull",
  RedBull: "Red Bull",
  "Ritter Sport": "Ritter Sport",
  Nivea: "Beiersdorf",
  Eucerin: "Beiersdorf",
  "La prairie": "Beiersdorf",
  Coppertone: "Beiersdorf",
  Labello: "Beiersdorf",
  Hansaplast: "Beiersdorf",
  "8x4": "Beiersdorf",
  Floren: "Beiersdorf",
  Hidrofugal: "Beiersdorf",
  Gammon: "Beiersdorf",
  "Skin stories": "Beiersdorf",
  Florena: "Beiersdorf",
  "Stop the water while using me": "Beiersdorf",
  Chaul: "Beiersdorf",
  "o.w.n": "Beiersdorf",
  Chantecaille: "Beiersdorf",
  Ferrero: "Ferrero",
  Nutella: "Ferrero",
  Kinder: "Ferrero",
  TicTac: "Ferrero",
  "Tic Tac": "Ferrero",
  Raffaello: "Ferrero",
  "Golden Gallery": "Ferrero",
  "Annie's": "General Mills",
  "Autumn's Gold": "General Mills",
  "Betty Crocker": "General Mills",
  Bisquick: "General Mills",
  "Blue Buffalo": "General Mills",
  Boldcultr: "General Mills",
  Bugles: "General Mills",
  "Cascadian Farm": "General Mills",
  Cheerios: "General Mills",
  "Chex Cereal": "General Mills",
  "Chex Mix": "General Mills",
  "Cinnamon Toast Crucnh": "General Mills",
  "Cocoa Puffs": "General Mills",
  "cookie Crisp": "General Mills",
  Doolies: "General Mills",
  Dunkaroos: "General Mills",
  "Fiber one": "General Mills",
  "food should taste good": "General Mills",
  "Gardetto's": "General Mills",
  "Golden grahams": "General Mills",
  "Green Giant": "General Mills",
  "Haagen-Dazs": "General Mills",
  "Haagen Dazs": "General Mills",
  "Häagen-Dazs": "General Mills",
  "Häagen Dazs": "General Mills",
  "Jus-rol": "General Mills",
  larabar: "General Mills",
  "Latina fresh": "General Mills",
  "Lucky charms": "General Mills",
  "Monster cereal": "General Mills",
  "Muir glen": "General Mills",
  "Nature Valley": "General Mills",
  "Old El Paso": "General Mills",
  Pillsbury: "General Mills",
  "Pillsbury Atta": "General Mills",
  Progresso: "General Mills",
  "Raisin Nut Bran": "General Mills",
  "Ratio Food": "General Mills",
  "Reese-s Puffs": "General Mills",
  "Totino's": "General Mills",
  Trix: "General Mills",
  "Wanchai Ferry": "General Mills",
  Wheaties: "General Mills",
  Yoki: "General Mills",
  Yoplait: "General Mills",
  Herbalife: "Herbalife",
};
