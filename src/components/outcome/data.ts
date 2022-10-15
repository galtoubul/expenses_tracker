import { GridRowsProp } from "@mui/x-data-grid";
import { randomCreatedDate, randomId } from "@mui/x-data-grid-generator";

const initialRows: GridRowsProp = [
  {
    id: randomId(),
    month: randomCreatedDate(),
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
    month: randomCreatedDate(),
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
    month: randomCreatedDate(),
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
    month: randomCreatedDate(),
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
    month: randomCreatedDate(),
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

export default initialRows;