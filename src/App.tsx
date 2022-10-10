import { Box } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import AppThemeProvider from "./appProviders/AppThemeProvider/AppThemeProvider";
import Incomes from "./components/incomes/Incomes";
import ExpandableDrawer from "./components/nav/ExpandableDrawer";
import Outcomes from "./components/outcomes/Outcomes";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <AppThemeProvider>
      <Box sx={{ display: "flex" }}>
        <ExpandableDrawer />
        <Box component="main" sx={{ p: 3 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/incomes" element={<Incomes />} />
            <Route path="/outcomes" element={<Outcomes />} />
          </Routes>
        </Box>
      </Box>
    </AppThemeProvider>
  );
}

export default App;
