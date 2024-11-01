"use client";

import {
  type IPieChartSpec,
  VChart,
} from "@visactor/react-vchart";
import type { Datum } from "@visactor/vchart/esm/typings";
import { ticketByChannels } from "@/data/ticket-by-channels";
import { addThousandsSeparator } from "@/lib/utils";

const data = ticketByChannels.reduce(
  (acc, curr) => {
    acc.push({
      type: curr.type,
      value: curr.value + (acc[acc.length - 1]?.value || 0),
      realValue: curr.value,
    });
    return acc;
  },
  [] as { type: string; value: number; realValue: number }[],
);

const totalTickets = data.reduce((acc, curr) => acc + curr.value, 0);

const spec: IPieChartSpec = {
  type: "pie",
  legends: [
    {
      type: "discrete",
      visible: true,
      orient: "bottom",
    },
  ],
  data: [
    {
      id: "id0",
      values: ticketByChannels,
    },
  ],
  valueField: "value",
  categoryField: "type",
  outerRadius: 1,
  innerRadius: 0.88,
  startAngle: -180,
  padAngle: 0.6,
  endAngle: 0,
  centerY: "80%",
  layoutRadius: "auto",
  pie: {
    style: {
      cornerRadius: 6,
    },
  },
  tooltip: {
    trigger: ["click", "hover"],
    mark: {
      title: {
        visible: false,
      },
      content: [
        {
          key: (datum: Datum | undefined) => datum?.type,
          value: (datum: Datum | undefined) => datum?.realValue,
        },
      ],
    },
  },
  indicator: [
    {
      visible: true,
      offsetY: "40%",
      title: {
        style: {
          text: "Total Active Tickets",
          fontSize: 16,
          opacity: 0.6,
        },
      },
    },
    {
      visible: true,
      offsetY: "64%",
      title: {
        style: {
          text: addThousandsSeparator(totalTickets),
          fontSize: 28,
        },
      },
    },
  ],
};

export default function Chart() {
  return <VChart spec={spec} />;
}
