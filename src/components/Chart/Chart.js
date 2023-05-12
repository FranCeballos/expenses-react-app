import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const valuesArray = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...valuesArray);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
