"use client";

import { VChart } from "@visactor/react-vchart";
import { ICirclePackingChartSpec } from "@visactor/vchart";
import { convertions } from "@/data/convertions";
import { formatNumber } from "@/lib/utils";

const spec: ICirclePackingChartSpec = {
  data: [
    {
      id: "data",
      values: convertions,
    },
  ],
  type: "circlePacking",
  categoryField: "name",
  valueField: "value",
  drill: true,
  padding: 0,
  layoutPadding: 5,
  label: {
    style: {
      fill: "white",
      stroke: false,
      visible: (d) => d.depth === 0,
      text: (d) => formatNumber(d.value),
      fontSize: (d) => d.radius / 2,
      dy: (d) => d.radius / 8,
    },
  },
  legends: [
    {
      visible: true,
      orient: "top",
      position: "start",
      padding: 0,
    },
  ],
  tooltip: {
    trigger: ["click", "hover"],
    mark: {
      content: {
        value: (d) => formatNumber(d?.value),
      },
    },
  },
  animationEnter: {
    easing: "cubicInOut",
  },
  animationExit: {
    easing: "cubicInOut",
  },
  animationUpdate: {
    easing: "cubicInOut",
  },
};

export default function Chart() {
  // TODO: fix sometimes all bubbles becomes blue, when change theme, this must happen
  return <VChart spec={spec} />;
}