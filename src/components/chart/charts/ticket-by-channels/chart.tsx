"use client";

import { type IGaugeChartSpec, VChart } from "@visactor/react-vchart";
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

const spec: IGaugeChartSpec = {
  type: "gauge",
  data: [
    {
      id: "pointer",
      values: [
        {
          type: "A",
          value: 0.6,
        },
      ],
    },
    {
      id: "segment",
      values: data,
    },
  ],
  gauge: {
    type: "gauge",
    dataId: "segment",
    categoryField: "type",
    valueField: "value",
    seriesField: "type",
    segment: {
      style: {
        cornerRadius: 6,
      },
    },
  },
  padding: {
    // ? Right thing to do?
    top: -110,
    right: 0,
    bottom: 0,
    left: 0,
  },
  pointer: {
    type: "path",
    visible: false,
  },
  pin: {
    visible: false,
  },
  pinBackground: {
    visible: false,
  },
  radiusField: "value",
  categoryField: "type",
  valueField: "value",
  outerRadius: 1,
  innerRadius: 0.88,
  startAngle: -190,
  endAngle: 10,
  centerY: "90%",
  axes: [
    {
      type: "linear",
      orient: "angle",
      visible: false,
    },
  ],
  legends: [
    {
      type: "discrete",
      visible: true,
      orient: "bottom",
    },
  ],
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
  // @ts-expect-error TODO: Fix this
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
