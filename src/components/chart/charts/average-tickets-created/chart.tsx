"use client";

import { isWithinInterval } from "date-fns";
import { useAtomValue } from "jotai";
import type { DateRange } from "react-day-picker";
import { VChart } from "@visactor/react-vchart";
import type { IBarChartSpec } from "@visactor/vchart";
import { averageTicketsCreated } from "@/data/average-tickets-created";
import { dateRangeAtom, ticketChartDataAtom } from "@/lib/atoms";
import type { TicketMetric } from "@/types/types";

const generateSpec = (data: TicketMetric[]): IBarChartSpec => ({
  type: "bar",
  data: [
    {
      id: "barData",
      values: data,
    },
  ],
  xField: "date",
  yField: "count",
  seriesField: "type",
  padding: 0,
  legends: {
    visible: true,
  },
  stack: false,
  bar: {
    // The state style of bar
    state: {
      hover: {
        // ? DISCUSS: stroke value match theme
        stroke: "#000",
        lineWidth: 1,
      },
    },
    style: {
      // TODO: move this radius to theme
      cornerRadius: [8, 8, 8, 8],
      // TODO: legend 交互仍然不对，这种写法太 hacky
      // y1: (datum, ctx) => {
      //   // @ts-expect-error lack type definition
      //   return ctx.getRegion().getLayoutRect().height;
      // },
      zIndex: (datum) => {
        return datum.type === "resolved" ? 2 : 1;
      },
    },
  },
});

export default function Chart() {
  const ticketChartData = useAtomValue(ticketChartDataAtom);
  const spec = generateSpec(ticketChartData);
  return <VChart spec={spec} />;
}
