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

// const slogan = 'By refusing to exit the Russian market, Nestlé is supporting the war in Ukraine. Buy something else.';

function checkBoycottedProduct(text) {
  return boycottedProducts.some((product) => text.includes(product.toLowerCase()));
}

function appendFooter(tileClasses) {
  const footer = document.createElement('div');
  const flag = document.createElement('div');
  const text = document.createElement('div');
  const close = document.createElement('div');
  flag.innerText = '🇺🇦';
  flag.ariaRoleDescription = 'Ukranian Flag';
  flag.ariaLabel = 'Ukranian Flag';
  flag.role = 'img';
  text.innerHTML =
    'By refusing to exit the Russian market, Nestlé is supporting the war in Ukraine. Their products have been blurred. Please choose something else. <a href="https://google.com">Read more</a>';
  close.innerText = 'Close';
  footer.appendChild(flag);
  footer.appendChild(text);
  // footer.appendChild(close);
  footer.classList.add('ukraine-footer');
  const productTiles = document.querySelectorAll(...tileClasses);
  const productArray = Array.from(productTiles).some((tile) => checkBoycottedProduct(tile.innerText.toLowerCase()));
  if (productArray) {
    document.body.appendChild(footer);
  }
}

function findProducts2(tileClasses) {
  const footerExists = document.querySelector('.ukraine-footer');
  if (!footerExists) {
    appendFooter(tileClasses);
  }
  const productTiles = document.querySelectorAll(...tileClasses);

  productTiles.forEach((item) => {
    const productDescription = item.innerText.toLowerCase();
    if (checkBoycottedProduct(productDescription)) {
      item.classList.add('blurred');
    }
  });
}

const supermarket = window.location.hostname;
function chooseHost() {
  switch (supermarket) {
    case 'www.tesco.com':
      findProducts2(['.product-list--list-item', '.product-tile-wrapper']);
      break;
    case 'www.tesco.ie':
      findProducts2(['.product-list--list-item', '.product-tile-wrapper']);
      break;
    case 'www.ocado.com':
      findProducts2(['.fops-item']);
      break;
    case 'shop.supervalu.ie':
      findProducts2(['.product-list-item']);
      break;
    case 'www.sainsburys.co.uk':
      findProducts2(['.pt-grid-item']);
      break;
    case 'groceries.asda.com':
      findProducts2(['.co-item']);
      break;
    case 'groceries.morrisons.com':
      findProducts2(['.fop-item']);
      break;
    case 'www.iceland.co.uk':
      findProducts2(['.product-tile']);
      break;
    case 'shop.jiffygrocery.co.uk':
      findProducts2(['.product-item']);
      break;
    case 'groceries.aldi.co.uk':
      findProducts2(['.product-tile']);
      break;
    case 'www.amazon.co.uk':
      findProducts2(['.s-result-item']);
      break;
    // more difficult DOM observation
    // case 'www.waitrose.com/':
    //   findProducts2(['.pt-grid-item']);
    //   break;
    default:
      return;
  }
}

const boycottedProducts = [
  'Nestle',
  'Nestlé',
  'Cerelac',
  'Gerber',
  'NaturNes',
  'Pure Life',
  'Perrier',
  'Pellegrino',
  'Cheerios',
  'Fitness',
  'Lion',
  'Nesquik',
  'Aero',
  'Cailler',
  'KitKat',
  'Milkybar',
  "Les Recettes de l'Atelier",
  'Orion',
  'Quality Street',
  'Smarties',
  'Toll House',
  'Blue Bottle Coffee',
  'Nescafé Dolce Gusto',
  'Nescafe Dolce Gusto',
  'Nespresso',
  'Starbucks',
  'Buitoni',
  'Herta',
  'Hot Pockets',
  'Lean Cuisine',
  'Maggi',
  'Stouffer',
  'Thomy',
  'Carnation',
  'Coffee-Mate',
  'La Laitière',
  'La Laitiere',
  'Nido',
  'Milo',
  'Nestea',
  'Chef',
  'Chef-Mate',
  'Chef Mate',
  'Maggi',
  'Milo',
  "Minor's",
  'Nescafé',
  'Nescafe',
  'Nestea',
  'Sjora',
  'Lean Cuisine',
  "Stouffer's",
  'Stouffer',
  'Boost',
  'Nutren Junior',
  'Peptamen',
  'Resource',
  "Dreyer's",
  'Dreyer',
  'Extrême',
  'Extreme',
  'Häagen-Dazs',
  'Haagen-Dazs',
  'Haagen Dazs',
  'Mövenpick',
  'Movenpick',
  'Nestlé Ice Cream',
  'Nestle Ice Cream',
  'Alpo',
  'Bakers Complete',
  'Beneful',
  'Cat Chow',
  'Dog Chow',
  'Fancy Feast',
  'Felix',
  'Friskies',
  'Gourmet',
  'Purina',
  'Purina ONE',
  'Pro Plan',
];
