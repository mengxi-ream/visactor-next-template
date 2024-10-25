"use client";

import { isWithinInterval } from "date-fns";
import { useAtomValue } from "jotai";
import type { DateRange } from "react-day-picker";
import { VChart } from "@visactor/react-vchart";
import type { IBarChartSpec } from "@visactor/vchart";
import {
  type TicketCreated,
  averageTicketsCreated,
} from "@/data/average-tickets-created";
import { dateRangeAtom } from "@/lib/atoms";

const generateSpec = (data: TicketCreated[]): IBarChartSpec => ({
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
  stack: true,
  legends: {
    visible: true,
  },
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
      y1: (datum, ctx) => {
        // @ts-expect-error lack type definition
        return ctx.getRegion().getLayoutRect().height;
      },
      zIndex: (datum) => {
        return datum.type === "resolved" ? 2 : 1;
      },
    },
  },
});

const generateData = (dateRange: DateRange | undefined) => {
  if (!dateRange?.from || !dateRange?.to) return [];

  const startDate = dateRange.from as Date;
  const endDate = dateRange.to as Date;

  return averageTicketsCreated
    .filter((item) => {
      const date = new Date(item.date);
      return isWithinInterval(date, { start: startDate, end: endDate });
    })
    .flatMap((item) => [
      {
        date: item.date,
        type: "resolved",
        count: item.resolved,
      },
      {
        date: item.date,
        type: "increased",
        count: item.created - item.resolved,
      },
    ]);
};

export default function Chart() {
  const dateRange = useAtomValue(dateRangeAtom);
  const data = generateData(dateRange);
  console.log(data);
  const spec = generateSpec(data);
  return <VChart spec={spec} />;
}
