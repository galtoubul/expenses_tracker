/** @jsxImportSource @emotion/react */
import Table from "../common/table/Table";
import { css } from "@emotion/react";
import { flexCenterCol } from "../common/styles";
import { initialRows } from "./data";
import { dateFormatter, ilsPrice } from "../common/table/utils";

const mainContainer = css([flexCenterCol, { width: "75%" }]);

const statelessColumns = [
  {
    field: "month",
    headerName: "Month",
    type: "date",
    width: 180,
    valueFormatter: ({ value }) => dateFormatter.format(value),
    editable: true,
  },
  {
    field: "buildingFees",
    headerName: "Building Fees",
    ...ilsPrice,
    editable: true,
  },
  {
    field: "electricity",
    headerName: "Electricity",
    ...ilsPrice,
    editable: true,
  },
  { field: "gas", headerName: "Gas", ...ilsPrice, editable: true },
  { field: "cityFees", headerName: "City Fees", ...ilsPrice, editable: true },
  { field: "water", headerName: "Water", ...ilsPrice, editable: true },
  { field: "partner", headerName: "Partner", ...ilsPrice, editable: true },
  { field: "groceries", headerName: "Groceries", ...ilsPrice, editable: true },
  { field: "other", headerName: "Other", ...ilsPrice, editable: true },
];

const Outcome = () => {
  return (
    <div css={mainContainer}>
      <Table initialRows={initialRows} statelessColumns={statelessColumns} />
    </div>
  );
};

export default Outcome;
