import { GridRowsProp } from "@mui/x-data-grid";
import { randomCreatedDate, randomId } from "@mui/x-data-grid-generator";

export const initialRows: GridRowsProp = [
  {
    id: randomId(),
    month: randomCreatedDate(),
    salary: 17500,
    other: 250,
  },
  {
    id: randomId(),
    month: randomCreatedDate(),
    salary: 17500,
    other: 250,
  },
  {
    id: randomId(),
    month: randomCreatedDate(),
    salary: 17500,
    other: 250,
  },
  {
    id: randomId(),
    month: randomCreatedDate(),
    salary: 17500,
    other: 250,
  },
];
