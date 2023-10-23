const reasonsForBoycott = {
  ILLEGAL_SETTLEMENT: "ILLEGAL_SETTLEMENT",
  INFRASTRUCTURE_SUPPORT: "INFRASTRUCTURE_SUPPORT",
  ISRAELI_PRESENCE: "ISRAELI_PRESENCE",
  FINANCIAL_SUPPORT: "FINANCIAL_SUPPORT",
  PUBLIC_SUPPORT: "PUBLIC_SUPPORT",
};

const companies = [
  {
    name: "Ahava",
    reasons: [reasonsForBoycott.ILLEGAL_SETTLEMENT_ACTIVITY],
    description:
      "Ahava cosmetics has its production site in an illegal Israeli settlement",
  },
  {
    name: "HP",
    reasons: [reasonsForBoycott.INFRASTRUCTURE_SUPPORT],
    description:
      "HP (Hewlett Packard) helps Israel restrict Palestinian movement by providing a biometric ID system",
  },
  {
    name: "Keter",
    reasons: [reasonsForBoycott.ISRAELI_PRESENCE],
    description:
      "Keter is an Israeli manufacturer and marketer of resin-based household and garden consumer products",
  },
  {
    name: "Strauss",
    reasons: [reasonsForBoycott.ISRAELI_PRESENCE],
    description:
      "Strauss is an Israeli manufacturer and marketer of consumer foods sold through retail stores",
  },
  {
    name: "Danone",
    reasons: [reasonsForBoycott.FINANCIAL_SUPPORT],
    description:
      "Danone is a French multinational food-products corporation that holds 20% shares of Israel’s Strauss Group food company",
  },
  {
    name: "Tivall",
    reasons: [reasonsForBoycott.ISRAELI_PRESENCE],
    description:
      "Tivall is a food company in Israel which supplies meat substitute products, including Tivall veggie grilled fillet, veggie burger, corn schnitzel, chick’n cutlets, veggie chick’n nuggets, and vegan corn bites",
  },
  {
    name: "Nestle",
    reasons: [
      reasonsForBoycott.INFRASTRUCTURE_SUPPORT,
      reasonsForBoycott.FINANCIAL_SUPPORT,
    ],
    description:
      "Nestlé is a Swiss multinational food and drink company that owns 53.8% of the leading Israeli food manufacturer Osem",
  },
  {
    name: "Coca-Cola",
    reasons: [reasonsForBoycott.FINANCIAL_SUPPORT],
    description:
      "Coca-Cola is an American multinational corporation. Coca-Cola Israel owns dairy farms in illegal Israeli settlements",
  },
  {
    name: "Eden Spring",
    reasons: [reasonsForBoycott.ISRAELI_PRESENCE],
    description:
      "Eden Springs Ltd is an Israeli bottled mineral water marketing company that takes water from the Salukia spring in the illegally occupied Syrian Golan Heights",
  },
  {
    name: "SodaStream",
    reasons: [reasonsForBoycott.ISRAELI_PRESENCE],
    description:
      "SodaStream International Ltd is an Israel-based manufacturing company with a history of mistreatment of and discrimination against Palestinian workers",
  },
  {
    name: "Starbucks",
    reasons: [reasonsForBoycott.PUBLIC_SUPPORT],
    description:
      "Starbucks is an American multinational chain of coffeehouses. Starbucks has opened outlets in US bases in Afghanistan and Iraq and at the illegal torture center in Guantanamo Bay. Starbucks also sponsors fundraisers for Israel",
  },
  {
    name: "Siemens",
    reasons: [reasonsForBoycott.INFRASTRUCTURE_SUPPORT],
    description:
      "Siemens is the largest industrial manufacturing company in Europe for buildings and distributed energy systems, and it will link Israel’s electricity grid with Europe",
  },
  {
    name: "Puma",
    reasons: [reasonsForBoycott.FINANCIAL_SUPPORT],
    description:
      "Puma SE is a German multinational corporation that manufactures athletic and casual footwear, apparel, and accessories. Puma sponsors the Israel Football Association",
  },
  {
    name: "Sabra",
    reasons: [reasonsForBoycott.FINANCIAL_SUPPORT],
    description:
      "Sabra Dipping Company is a joint venture that produces food products. Sabra is co-owned by PepsiCo and the Strauss Group, which provides financial support to the Israeli army",
  },
];
