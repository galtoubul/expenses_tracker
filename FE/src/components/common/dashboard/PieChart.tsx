import { PieChart as MinimalPieChart } from "react-minimal-pie-chart";

const PieChart = ({data}) => {
  const lineWidth = 60;

  return (
    <MinimalPieChart
      style={{
        fontSize: "6px",
      }}
      data={data}
      radius={45}
      lineWidth={lineWidth}
      segmentsShift={1}
      animate
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
      labelPosition={100 - lineWidth / 2}
      labelStyle={{
        fill: "#fff",
        opacity: 0.75,
        pointerEvents: "none",
      }}
    />
  );
};

export default PieChart;
