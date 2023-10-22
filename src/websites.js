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
        mainContentClass: ["body", "main__content"],
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
    case "www.costco.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "product",
        tileProp: "textContent",
      };
    case "www.walmart.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "w-25",
        tileProp: "textContent",
      };
    case "www.target.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "ebNJlV",
        tileProp: "textContent",
      };
    case "www.instacart.com":
      return {
        mainContentClass: ["body", "css-hshm0p"],
        productTileClass: "css-er4k5d",
        tileProp: "textContent",
      };
    case "www.amazon.com":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClass: "s-result-item",
        tileProp: "innerText",
      };
    case "www.google.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "sh-dgr__grid-result",
        tileProp: "innerText",
      };
    case "www.kroger.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "AutoGrid-cell",
        tileProp: "innerText",
      };
    case "www.wholefoodsmarket.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "w-pie--product-tile",
        tileProp: "innerText",
      };
    case "www.harristeeter.com":
      return {
        mainContentClass: ["body", "PaginateItems"],
        productTileClass: "AutoGrid-cell",
        tileProp: "innerText",
      };
    case "www.safeway.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "card",
        tileProp: "innerText",
      };
    case "shop.foodlion.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-wrapper",
        tileProp: "innerText",
      };
    case "www.albertsons.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "card",
        tileProp: "innerText",
      };
    case "www.vons.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "card",
        tileProp: "innerText",
      };
    case "www.jewelosco.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "card",
        tileProp: "innerText",
      };
    case "www.acmemarkets.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "card",
        tileProp: "innerText",
      };
    case "www.shaws.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "card",
        tileProp: "innerText",
      };
    case "stopandshop.com":
      return {
        mainContentClass: ["body", "product-view-search"],
        productTileClass: "product-cell",
        tileProp: "innerText",
      };
    case "giantfoodstores.com":
      return {
        mainContentClass: ["body", "product-view-search"],
        productTileClass: "product-cell",
        tileProp: "innerText",
      };
    case "giantfood.com":
      return {
        mainContentClass: ["body", "product-view-search"],
        productTileClass: "product-cell",
        tileProp: "innerText",
      };
    case "www.hannaford.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-impressions",
        tileProp: "innerText",
      };
    case "megamarket.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "varus.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "novus.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "pchelka.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "eko.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "ultramarket.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "auchan.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "cosmos.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "tavriav.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClass: "ProductsBox__listItem",
        tileProp: "textContent",
      };
    case "auchan.ua":
      return {
        mainContentClass: ["body"],
        productTileClass: "item_in_grid__2RO1F",
        tileProp: "textContent",
      };
    case "fozzyshop.ua":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-miniature",
        tileProp: "textContent",
      };
    case "megamarket.ua":
      return {
        mainContentClass: ["body"],
        productTileClass: "product",
        tileProp: "textContent",
      };
    case "zakaz.atbmarket.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "catalog-item",
        tileProp: "textContent",
      };
    case "shop.silpo.ua":
      return {
        mainContentClass: ["body", "product-list__wrapper"],
        productTileClass: "product-list-item",
        tileProp: "textContent",
      };
    case "shop.nashkraj.ua":
      return {
        mainContentClass: ["body"],
        productTileClass: "image_group",
        tileProp: "textContent",
      };
    case "www.capraboacasa.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "product",
        tileProp: "textContent",
      };
    case "compraonline.e-leclerc.es":
      return {
        mainContentClass: ["body"],
        productTileClass: "productos_producto-tarjetaV2",
        tileProp: "textContent",
      };
    case "www.albertdomuzdarma.cz":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-item",
        tileProp: "textContent",
      };
    case "www.lidl.cz":
      return {
        mainContentClass: ["body"],
        productTileClass: "s-grid__item",
        tileProp: "textContent",
      };
    case "nakup.itesco.cz":
      return {
        mainContentClass: ["body", "main__content"],
        productTileClass: "product-list--list-item",
        tileProp: "textContent",
      };
    case "shop.iglobus.cz":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-item",
        tileProp: "textContent",
      };
    case "www.tetadrogerie.cz":
      return {
        mainContentClass: ["body"],
        productTileClass: "j-item",
        tileProp: "textContent",
      };
    case "www.coursesu.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "grid-tile",
        tileProp: "textContent",
      };
    case "www.carrefour.fr":
      return {
        mainContentClass: ["body"],
        productTileClass: "product-grid-item",
        tileProp: "textContent",
      };
    case "www.intermarche.com":
      return {
        mainContentClass: ["body"],
        productTileClass: "product",
        tileProp: "textContent",
      };
    case "www.auchan.fr":
      return {
        mainContentClass: ["body"],
        productTileClass: "list__item",
        tileProp: "textContent",
      };
    case "www.franprix.fr":
      return {
        mainContentClass: ["body", "sf-p-cart"],
        productTileClass: "sf-vpc",
        tileProp: "textContent",
      };
    case "www.monoprix.fr":
      return {
        mainContentClass: ["body"],
        productTileClass: "grocery-item",
        tileProp: "textContent",
      };
    case "drive.supermarchesmatch.fr":
      return {
        mainContentClass: ["body"],
        productTileClass: "item-container",
        tileProp: "textContent",
      };
    case "prom.ua":
      return {
        mainContentClass: ["body", "iVGEc"],
        productTileClass: "js-productad",
        tileProp: "textContent",
      };
    case "rozetka.com.ua":
      return {
        mainContentClass: ["body"],
        productTileClass: "catalog-grid__cell",
        tileProp: "textContent",
      };
    case "ek.ua":
      return {
        mainContentClass: ["body"],
        productTileClass: "touchcarousel-item",
        tileProp: "textContent",
      };
    case "m.ua":
      return {
        mainContentClass: ["body"],
        productTileClass: "pict_txt",
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
