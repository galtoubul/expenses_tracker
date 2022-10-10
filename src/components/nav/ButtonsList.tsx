import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import { Link } from "react-router-dom";

const iconsAndText = [
  {
    icon: <DashboardIcon color="action" />,
    text: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <CallReceivedIcon color="action" />,
    text: "Incomes",
    path: "/incomes",
  },
  {
    icon: <CallMadeIcon color="action" />,
    text: "Outcomes",
    path: "/outcomes",
  },
];

const ButtonsList = ({ open }) => {
  return (
    <List>
      {iconsAndText.map(({ icon, text, path }) => (
        <ListItem key={text} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Link to={path}>{icon}</Link>
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ButtonsList;
