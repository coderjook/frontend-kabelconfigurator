export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
}

export const haspelItems = [
  {
    artikelnummer: 15716,
    typenummer: "SK4601.RM",
    merk: "Schill",
    img: "/img/haspel.jpg",
    type_haspel: "RM",
    inkoopprijs: 462.98,
    prijsper: 1,
    configurator: "coax",
    breedte_haspel: 30,
    diameter_kern_haspel: 5,
    diameter_haspel: 20,
  },

  {
    artikelnummer: 14178,
    typenummer: "GT310.RM",
    merk: "Schill",
    img: "/img/haspel.jpg",
    type_haspel: "RM",
    inkoopprijs: 59.73,
    prijsper: 1,
    configurator: "coax",
    breedte_haspel: 35,
    diameter_kern_haspel: 6,
    diameter_haspel: 22,
  },

  {
    artikelnummer: 19724,
    typenummer: "GT380.MFK",
    merk: "Schill",
    img: "/img/haspel.jpg",
    type_haspel: "MFK",
    inkoopprijs: 161.73,
    prijsper: 1,
    configurator: "coax",
    breedte_haspel: 35,
    diameter_kern_haspel: 6,
    diameter_haspel: 22,
  },

  {
    artikelnummer: 18931,
    typenummer: "GT310.MFK",
    merk: "Schill",
    img: "/img/haspel.jpg",
    type_haspel: "MFK",
    inkoopprijs: 96.87,
    prijsper: 1,
    configurator: "coax",
    breedte_haspel: 35,
    diameter_kern_haspel: 6,
    diameter_haspel: 22,
  },
];

export const haspels = haspelItems.reduce((res, haspel) => {
  if (!res[haspel.type_haspel]) {
    res[haspel.type_haspel] = [];
  }
  res[haspel.type_haspel].push(haspel);
  return res;
}, {});
