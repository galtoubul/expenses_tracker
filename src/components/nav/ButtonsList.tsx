import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const iconsAndText = [
  {
    icon: <DashboardIcon color="action" />,
    text: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <CallReceivedIcon color="action" />,
    text: "income",
    path: "/income",
  },
  {
    icon: <CallMadeIcon color="action" />,
    text: "Outcome",
    path: "/outcome",
  },
];

const ButtonsList = ({ open }) => {
  const theme = useTheme();
  return (
    <List>
      {iconsAndText.map(({ icon, text, path }) => (
        <ListItem
          key={text}
          component={Link}
          to={path}
          disablePadding
          sx={{ display: "block" }}
        >
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
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{
                opacity: open ? 1 : 0,
                color: theme.palette.grey[600],
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ButtonsList;
