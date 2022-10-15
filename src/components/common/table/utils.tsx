import { GridColTypeDef } from "@mui/x-data-grid";

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "ILS",
});

export const dateFormatter = new Intl.DateTimeFormat(["he"]);

export const ilsPrice: GridColTypeDef = {
  type: "number",
  width: 130,
  valueFormatter: ({ value }) => currencyFormatter.format(value),
  cellClassName: "font-tabular-nums",
};
