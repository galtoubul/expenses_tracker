import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  GridRowModes,
  GridToolbarContainer,
  GridRowsProp,
  GridRowModesModel,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

const calcNextMonth = (rows) => {
  const months = rows.map((row) => row.month);
  const latestDate = months.reduce(
    (prev, curr) => (prev < curr ? curr : prev),
    months[0]
  );
  const nextMonth = new Date(latestDate);
  nextMonth.setMonth(latestDate.getMonth() + 1);
  return nextMonth;
};

const EditToolbar = (props: EditToolbarProps) => {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      { id, month: calcNextMonth(oldRows), salary: 0, other: 0, isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "month" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add month
      </Button>
    </GridToolbarContainer>
  );
};

export default EditToolbar;
