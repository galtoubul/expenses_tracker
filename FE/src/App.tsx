/** @jsxImportSource @emotion/react */
import { Box } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import AppThemeProvider from "./appProviders/AppThemeProvider/AppThemeProvider";
import Income from "./components/income/Income";
import ExpandableDrawer from "./components/nav/ExpandableDrawer";
import Outcome from "./components/outcome/Outcome";
import Dashboard from "./components/dashboard/Dashboard";
import { css } from "@emotion/react";
import { flexCenter } from "./components/common/styles";

const contentContainer = css([flexCenter, { width: "100%" }]);

function App() {
  return (
    <AppThemeProvider>
      <Box sx={{ display: "flex" }}>
        <ExpandableDrawer />
        <Box css={contentContainer} sx={{ p: 3 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/outcome" element={<Outcome />} />
          </Routes>
        </Box>
      </Box>
    </AppThemeProvider>
  );
}

export default App;
