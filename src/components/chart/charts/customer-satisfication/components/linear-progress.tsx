"use client";

import { VChart } from "@visactor/react-vchart";
import { ILinearProgressChartSpec } from "@visactor/vchart";
import { Datum } from "@visactor/vchart/esm/typings";
import { numberToPercentage } from "@/lib/utils";

const getSpec = (
  label: string,
  color: string,
  percentage: number,
): ILinearProgressChartSpec => {
  return {
    type: "linearProgress",
    data: [
      {
        id: "id0",
        values: [
          {
            type: label,
            value: percentage,
          },
        ],
      },
    ],
    direction: "horizontal",
    xField: "value",
    yField: "type",
    seriesField: "type",
    height: 10,
    cornerRadius: 10,
    progress: {
      style: {
        cornerRadius: 0,
      },
    },
    color: [color],
    bandWidth: 10,
    padding: 0,
    tooltip: {
      trigger: ["click", "hover"],
      mark: {
        title: {
          visible: false,
        },
        content: [
          {
            key: label,
            value: (datum: Datum | undefined) =>
              datum ? `${numberToPercentage(percentage)}` : "",
          },
        ],
      },
    },
    axes: [
      {
        orient: "right",
        type: "band",
        domainLine: { visible: false },
        tick: { visible: false },
        label: {
          formatMethod: () => numberToPercentage(percentage),
          style: {
            // fill zinc-600
            fill: "#868686",
          },
        },
        maxWidth: "60%", // 配置坐标轴的最大空间
        width: 36,
      },
    ],
  };
};

export default function LinearProgress({
  label,
  color,
  percentage,
}: {
  label: string;
  color: string;
  percentage: number;
}) {
  return <VChart spec={getSpec(label, color, percentage)} />;
}
