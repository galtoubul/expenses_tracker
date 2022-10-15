import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const BurgerIcon = ({ handleDrawerOpen, open }) => {
  return (
    <IconButton
      onClick={handleDrawerOpen}
      sx={{
        ...(open && { display: "none" }),
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default BurgerIcon;
