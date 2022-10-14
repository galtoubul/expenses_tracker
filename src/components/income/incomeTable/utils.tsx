export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "ILS",
});

export const dateFormatter = new Intl.DateTimeFormat(["he"]);
