import { Box } from "@mui/system";
import PieChart from "../common/dashboard/PieChart";
import { getDataForDashboard } from "../common/dashboard/dashboardUtils";
import { Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box display="grid" width="50%" justifyItems="center" gap="10px">
      <Box gridColumn="1/3" gridRow="1/2">
        <Typography variant="h3" gutterBottom>
          Last 3 Months
        </Typography>
      </Box>
      <Box display="grid" justifyItems="center" gridColumn="1/2" gridRow="2/4">
        <Typography variant="h4" gutterBottom>
          Income
        </Typography>
        <PieChart data={getDataForDashboard("income")} />
      </Box>
      <Box display="grid" justifyItems="center" gridColumn="2/3" gridRow="2/4">
        <Typography variant="h4" gutterBottom>
          Outcome
        </Typography>
        <PieChart data={getDataForDashboard("outcome")} />
      </Box>
    </Box>
  );
};

export default Dashboard;
