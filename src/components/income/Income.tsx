/** @jsxImportSource @emotion/react */
import IncomeTable from "./IncomeTable";
import { css } from "@emotion/react";
import {flexCenterCol} from "../common/styles"

const mainContainer = css([flexCenterCol, {width: "50%"}]);

const Income = () => {
  return (
    <div css={mainContainer}>
      <IncomeTable />
    </div>
  );
};

export default Income;
