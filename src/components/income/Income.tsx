/** @jsxImportSource @emotion/react */
import Table from "../common/table/Table";
import { css } from "@emotion/react";
import { flexCenterCol } from "../common/styles";
import { initialRows } from "./data";
import { dateFormatter, ilsPrice } from "../common/table/utils";

const mainContainer = css([flexCenterCol, { width: "50%" }]);

const statelessColumns = [
  {
    field: "month",
    headerName: "Month",
    type: "date",
    width: 180,
    valueFormatter: ({ value }) => dateFormatter.format(value),
    editable: true,
  },
  { field: "salary", headerName: "Salary", ...ilsPrice, editable: true },
  { field: "other", headerName: "Other", ...ilsPrice, editable: true },
];

const Income = () => {
  return (
    <div css={mainContainer}>
      <Table initialRows={initialRows} statelessColumns={statelessColumns} />
    </div>
  );
};

export default Income;
