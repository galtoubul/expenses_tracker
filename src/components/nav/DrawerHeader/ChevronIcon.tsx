import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const ChevronIcon = ({ handleDrawerClose }) => {
  return (
    <IconButton onClick={handleDrawerClose}>
      <ChevronLeftIcon />
    </IconButton>
  );
};

export default ChevronIcon;
