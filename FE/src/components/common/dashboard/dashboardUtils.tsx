type DataSource = "income" | "outcome";
type PieChartDataEntry = {
  title: string;
  value: number;
  color: string;
};
type PieChartData = PieChartDataEntry[];

export const getDataForDashboard = (dataSource: DataSource): PieChartData => {
  if (dataSource === "income") {
    return [
      { title: "Salary", value: 17500, color: "#7CC29C" },
      { title: "Other", value: 250, color: "#60A87F" },
    ];
  } else {
    return [
      { title: "Building Fees", value: 150, color: "#ea5545" },
      { title: "Electricity", value: 350, color: "#f46a9b" },
      { title: "Gas", value: 50, color: "#ef9b20" },
      { title: "City Fees", value: 400, color: "#edbf33" },
      { title: "Water", value: 200, color: "#ede15b" },
      { title: "Partner", value: 120, color: "#bdcf32" },
      { title: "Groceries", value: 2000, color: "#87bc45" },
      { title: "Other", value: 250, color: "#27aeef" },
    ];
  }
};
