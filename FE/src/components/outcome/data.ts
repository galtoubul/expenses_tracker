import { GridRowsProp } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

export const initialRows: GridRowsProp = [
  {
    id: randomId(),
    month: new Date("01/01/2022"),
    buildingFees: 150,
    electricity: 350,
    gas: 50,
    cityFees: 400,
    water: 200,
    partner: 120,
    groceries: 2000,
    other: 250,
  },
  {
    id: randomId(),
    month: new Date("02/01/2022"),
    buildingFees: 150,
    electricity: 350,
    gas: 50,
    cityFees: 400,
    water: 200,
    partner: 120,
    groceries: 2000,
    other: 250,
  },
  {
    id: randomId(),
    month: new Date("03/01/2022"),
    buildingFees: 150,
    electricity: 350,
    gas: 50,
    cityFees: 400,
    water: 200,
    partner: 120,
    groceries: 2000,
    other: 250,
  },
];
