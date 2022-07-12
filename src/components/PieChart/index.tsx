import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  PieControllerChartOptions,
  Chart,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import Popup from "../Popup";
import './style.css'

const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = "rgba(0, 0, 0, 0.7)";
    tooltipEl.style.borderRadius = "3px";
    tooltipEl.style.color = "white";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .1s ease";

    const table = document.createElement("table");
    table.style.margin = "0px";

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context: any, amounts: number[]) => {
  console.log(amounts);

  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const data = tooltip.dataPoints[0];
    const index = data.dataIndex;
    const percent = data.formattedValue;
    const label = data.label;
    console.log(tooltip.dataPoints[0]);

    const elem = `<div class='custom-tooltip'>
            <p>
                ${label}
            <p>
            <p>
            ${`${percent}%`}
        <p>
        <p>${amounts[index].toLocaleString()}</p>
        </div>`;
    tooltipEl.innerHTML = elem;
    console.log(tooltipEl);
    
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;
  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = "20px";
};

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

interface Props {
  labels: string[];
  datasetData: number[];
  amounts: number[];
}

export function PieChart({ labels, datasetData, amounts }: Props) {
  const options: any = {
    plugins: {
      tooltip: {
        enabled: false,
        position: "nearest",
        external: (context: any) => externalTooltipHandler(context, amounts),
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: datasetData,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  return <Pie options={options} data={data} />;
}
