window.addEventListener("load", () => {
  console.log("Dom loaded");
  // get the class names
  const { mainContentClass, productTileClass, tileProp } = getClassNames();
  // highlight products
  const matchedProducts = applyBoycott(productTileClass, tileProp);

  const listBoycottedCompanies = Object.keys(
    matchedProducts
      .map((product) => findBrand(product)[0])
      .reduce((acc, curr) => ((acc[curr] = ""), acc), {})
  );
  console.info("<><><>", listBoycottedCompanies);

  // action banner
  matchedProducts.length > 0 ? showFooter(matchedProducts) : hideFooter();
  // observe the content tag - add children
  observeDomChanges(mainContentClass, productTileClass, tileProp);
});

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
            if (mutation.removedNodes[0]?.className === "ukraine-footer") {
              return;
            }
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
  const matchedProducts = {};
  const productTiles = document.getElementsByClassName(productTileClassName);
  console.log(
    "## These are the products identified by the boycott extension. Useful for debugging purposes. ##"
  );
  Array.from(productTiles).forEach((tile) => {
    const tileText = removeAccents(tile[tileProp]);
    const matchedProduct = isBrandFoundInText(tileText);
    if (matchedProduct) {
      applyBlur(tile);
      matchedProducts[matchedProduct] = 1;
    }
  });
  console.log("## End of the list of identified products. ##");
  return Object.keys(matchedProducts);
}

function isBrandFoundInText(text) {
  // get array from brands
  const brands = brandReasons.map((brandReason) => brandReason.name);

  // expand search to include subbrands
  const brandProducts = brands.flatMap((brand) => subbrands[brand] || brand);

  // iterate over brand and return boolean depending
  // on whether brand has been found in text or not
  const matchedProduct = brandProducts.find(
    (brand) => text.search(new RegExp(brand, "gi")) > -1
  );

  return matchedProduct;
}

function applyBlur(node) {
  node.classList.add("blurred");
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
  flag.innerText = "🇵🇸";
  flag.style.fontSize = "30px";
  flag.ariaRoleDescription = "Palestinian Flag";
  flag.ariaLabel = "Palestinian Flag";
  flag.role = "img";
  text.innerHTML = `By supporting Israel, ${formattedListCompanies} ${
    listCompanies.length > 1 ? "are" : "is"
  } supporting the the apartheid of the Palestinians. Their products have been blurred. Please choose something else.`;
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

function removeAccents(text) {
  return text
    .replace(/[ÀÁÂÃÄÅ]/gi, "a")
    .replace(/[ÈÉÊË]/gi, "e")
    .replace(/[Î]/gi, "i")
    .replace(/[Ô]/gi, "o")
    .replace(/[Ù]/gi, "u")
    .replace(/[Ç]/gi, "c");
}

function findBrand(product) {
  return Object.entries(subbrands).find(([brand, products]) =>
    products.includes(product)
  );
}
