// const boycottedCompanies = [];

window.addEventListener("load", () => {
  alert("window loaded");
  console.log("window loaded");
  // get the class names
  const { mainContentClass, productTileClass, tileProp } = getClassNames();
  // highlight products in case user refreshes page

  // observe the content tag - add children
  observeDomChanges(mainContentClass, productTileClass, tileProp);
  // when there is change, blur the products

  // add the banner

  // observe the content tag - remove children

  // remove the tag
});

function getClassNames() {
  const supermarket = window.location.hostname;
  switch (supermarket) {
    case "www.tesco.ie":
      return {
        mainContentClass: "main__content",
        productTileClass: "product-list--list-item",
        tileProp: "textContent",
      };
    case "www.tesco.com":
      return {
        mainContentClass: "main__content",
        productTileClass: "product-list--list-item",
        tileProp: "textContent",
      };
    // TBD
    case "shop.supervalu.ie":
      return {
        mainContentClass: "search-all-aisles-view",
        productTileClass: "product-list-item",
        tileProp: "textContent",
      };
    /////
    case "www.sainsburys.co.uk": // what is being rbanded as mondelez when searching for orange?
      return {
        mainContentClass: "SRF__tileList",
        productTileClass: "pt-grid-item",
        tileProp: "textContent",
      };
    case "groceries.asda.com":
      return {
        mainContentClass: "search-page-content__products-tab-content",
        productTileClass: "co-item",
        tileProp: "textContent",
      };
    case "groceries.morrisons.com":
      return {
        mainContentClass: "main-column",
        productTileClass: "fop-item",
        tileProp: "textContent",
      };
    // case "www.iceland.co.uk":
    //   return {
    //     mainContentClass: "primary-content",
    //     productTileClass: "product-tile",
    //   };
    case "shop.jiffygrocery.co.uk":
      return {
        mainContentClass: "w-100p w-min-320",
        productTileClass: "product-item",
        tileProp: "textContent",
      };
    // case "groceries.aldi.co.uk":
    //   return {
    //     mainContentClass: "w-100p w-min-320",
    //     productTileClass: "product-tile",
    //   };
    case "www.amazon.co.uk":
      return {
        mainContentClass: "a-aui_72554-c",
        productTileClass: "s-result-item",
        tileProp: "innerText",
      };
    case "www.compraonline.bonpreuesclat.cat":
      return {
        mainContentClass: "layout__Container-sc-1cgl98j-0",
        productTileClass: "box__Box-sc-4y5e6z-0",
        tileProp: "textContent",
      };
    default:
      return {
        mainContentClass: "",
        productTileClass: "",
      };
  }
}

function findContentTag(contentTarget) {
  if (contentTarget === "body") {
    return (mutation) => mutation.target === contentTarget;
  } else {
    return (mutation) => mutation.target.className.includes(contentTarget);
  }
}

function observeDomChanges(contentClassName, productTileClassName, tileProp) {
  const targetFinder = findContentTag(contentClassName);
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // TO BE REMOVED //
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        // console.log(mutation);
      }
      ///////////////////
      if (
        mutation.type === "childList" &&
        mutation.addedNodes.length > 0 &&
        targetFinder(mutation) &&
        (!mutation.previousSibling ||
          mutation.previousSibling.className !== "ukraine-footer")
        // && mutation.target.className === contentClassName
      ) {
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
      console.log(tileText);
      console.log(matchedBrand, " < ", brandsOwnersMap[matchedBrand]);
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
  const brands = Object.keys(brandsOwnersMap);
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
  Danone: "Danone",
  Activia: "Danone",
  Oykos: "Danone",
  Prostokvashino: "Danone",
  Oikos: "Danone",
  Delight: "Danone",
  Danonino: "Danone",
  Silk: "Danone",
  Alpro: "Danone",
  Actimel: "Danone",
  Aqua: "Danone",
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
  Aqua: "Danone",
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
  Carlsberg: "Carlsberg",
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
  "Antica Erboristeria": "Henkel",
  Aquence: "Henkel",
  Ariasana: "Henkel",
  "Authentic Beauty Concept": "Henkel",
  Ballerina: "Henkel",
  Barnängen: "Henkel",
  "BC Bonacure": "Henkel",
  Beology: "Henkel",
  "Bio Presto": "Henkel",
  Blondme: "Henkel",
  Bloom: "Henkel",
  Bonderite: "Henkel",
  Bref: "Henkel",
  Brillance: "Henkel",
  bruynzeel: "Henkel",
  Catch: "Henkel",
  "Colour Catcher": "Henkel",
  Ceresit: "Henkel",
  Cimsec: "Henkel",
  Clin: "Henkel",
  "Color Expert": "Henkel",
  Coloria: "Henkel",
  "Country Colors": "Henkel",
  "Croc Odor": "Henkel",
  Cucal: "Henkel",
  Dato: "Henkel",
  Deni: "Henkel",
  Denivit: "Henkel",
  "Der General": "Henkel",
  Diadem: "Henkel",
  Diadermine: "Henkel",
  Dixan: "Henkel",
  "Drago Pulisan": "Henkel",
  "Dum Dum": "Henkel",
  Dylon: "Henkel",
  "Decap four": "Henkel",
  "Decap'Four": "Henkel",
  "Décap'Four": "Henkel",
  "Eau Ecarlate": "Henkel",
  Eparcyl: "Henkel",
  Essensity: "Henkel",
  Estrella: "Henkel",
  Fewa: "Henkel",
  Fibreplex: "Henkel",
  "Fix polvo": "Henkel",
  Fleuril: "Henkel",
  Gliss: "Henkel",
  Globol: "Henkel",
  got2b: "Henkel",
  "Havu Mäntysuopa": "Henkel",
  Häxan: "Henkel",
  Haxan: "Henkel",
  Igora: "Henkel",
  Indola: "Henkel",
  Instanet: "Henkel",
  k2r: "Henkel",
  "Kit racines": "Henkel",
  "Le chat": "Henkel",
  "Licor del Polo": "Henkel",
  "La toja": "Henkel",
  LePage: "Henkel",
  Loctite: "Henkel",
  Losk: "Henkel",
  Luminance: "Henkel",
  Lysoform: "Henkel",
  "Mad about": "Henkel",
  "Maison verte": "Henkel",
  Makroflex: "Henkel",
  "Men Perfect": "Henkel",
  Metylan: "Henkel",
  Micolor: "Henkel",
  "Mini Risk": "Henkel",
  Miror: "Henkel",
  Moment: "Henkel",
  "Naturale Antica Erboristeria": "Henkel",
  "Nordic Blonde": "Henkel",
  "Nature Box": "Henkel",
  "Nectra Color": "Henkel",
  "Natural & Easy": "Henkel",
  "Natural Styling": "Henkel",
  Nelsen: "Henkel",
  Neutrakal: "Henkel",
  Neutrex: "Henkel",
  Neutromed: "Henkel",
  Novelle: "Henkel",
  "Oust Descalers": "Henkel",
  "Osis+Session": "Henkel",
  "Only love": "Henkel",
  "Oil ultime": "Henkel",
  "osis+": "Henkel",
  "poly color": "Henkel",
  "pure color": "Henkel",
  Dishmatic: "Henkel",
  "Perfect mousse": "Henkel",
  Pronature: "Henkel",
  Palette: "Henkel",
  Pattex: "Henkel",
  Pemolux: "Henkel",
  Perfax: "Henkel",
  Perlan: "Henkel",
  Perlana: "Henkel",
  Persil: "Henkel",
  Perwoll: "Henkel",
  Ponal: "Henkel",
  Pravana: "Henkel",
  Pril: "Henkel",
  Pritt: "Henkel",
  Punch: "Henkel",
  "Re-nature": "Henkel",
  Rex: "Henkel",
  Rubson: "Henkel",
  "Super croix": "Henkel",
  "supreme keratin": "Henkel",
  schauma: "Henkel",
  Schwarzkopf: "Henkel",
  Seah: "Henkel",
  Sellotape: "Henkel",
  Septifos: "Henkel",
  Sexyhair: "Henkel",
  Shamtu: "Henkel",
  Sidol: "Henkel",
  Silan: "Henkel",
  Silhouette: "Henkel",
  Sista: "Henkel",
  Solvite: "Henkel",
  Somat: "Henkel",
  Spee: "Henkel",
  "Strait Styling": "Henkel",
  Syoss: "Henkel",
  "true beautiful honest": "Henkel",
  "tec italy": "Henkel",
  taft: "Henkel",
  tangit: "Henkel",
  technomelt: "Henkel",
  teraxyl: "Henkel",
  teroson: "Henkel",
  terra: "Henkel",
  theramed: "Henkel",
  unibond: "Henkel",
  vademecum: "Henkel",
  vape: "Henkel",
  vapona: "Henkel",
  vernel: "Henkel",
  vigor: "Henkel",
  viking: "Henkel",
  vim: "Henkel",
  "wipp express": "Henkel",
  "wc frisch": "Henkel",
  "witte reus": "Henkel",
  "Weißer Riese": "Henkel",
  "wk ultra": "Henkel",
  "x-tra": "Henkel",
  "zen'sect": "Henkel",
  "[3d]men": "Henkel",
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
  Api: "Mars",
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
  Comfort: "Unilever",
  Domestos: "Unilever",
  Dove: "Unilever",
  Hellmann: "Unilever",
  Knorr: "Unilever",
  Lifebuoy: "Unilever",
  Magnum: "Unilever",
  Omo: "Unilever",
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
  Ente: "SC Johnson",
  Drano: "SC Johnson",
  Fantastik: "SC Johnson",
  "Freedom carpet foam": "SC Johnson",
  Klaro: "SC Johnson",
  Lysoform: "SC Johnson",
  "Mr muscle": "SC Johnson",
  "Mr musculo": "SC Johnson",
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
};
