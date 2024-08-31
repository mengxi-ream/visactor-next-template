"use client";

import { VChart } from "@visactor/react-vchart";
import { IBarChartSpec } from "@visactor/vchart";
import { averageTicketsCreated } from "@/data/average-tickets-created";

const data = averageTicketsCreated
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
  ])
  .slice(0, 14);

const spec: IBarChartSpec = {
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
  extensionMark: [
    {
      type: "text",
      dataId: "barData",
      zIndex: 5,
      visible: true,
      state: {
        hover: {
          style: {
            opacity: 1,
          },
        },
      },
      style: {
        opacity: 0,
        text: (datum) => {
          return datum.count;
        },
        x: (datum, ctx) => {
          // console.log(ctx.valueToX([datum.State]));
          // console.log(ctx.xBandwidth());
          // console.log(ctx.getRegion());
          // @ts-expect-error lack type definition
          return ctx.valueToX([datum.date]) + ctx.xBandwidth() / 2;
        },
        y: (datum, ctx) => {
          // console.log("datum", datum);
          // console.log(ctx.valueToY([datum.count]));
          // console.log(ctx.yBandwidth());
          // console.log(ctx.getRegion());
          // console.log(ctx.getRegion().getBoundsInRect());
          // console.log(ctx.getRegion().getLayoutRect());
          const date = datum.date;
          const totalCount = data.reduce((acc, curr) => {
            if (curr.date === date) {
              return acc + curr.count;
            }
            return acc;
          }, 0);
          return (
            // @ts-expect-error lack type definition
            ctx.valueToY([totalCount]) - (datum.type === "resolved" ? 0 : 20)
          );
        },
      },
    },
  ],
  // totalLabel: {
  //   visible: true,
  //   state: {
  //     hover: {
  //       visible: false,
  //       stroke: "#000",
  //       style: {
  //         text: "",
  //       },
  //     },
  //   },
  // },
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
      y1: (datum, ctx) => {
        // @ts-expect-error lack type definition
        return ctx.getRegion().getLayoutRect().height;
      },
      zIndex: (datum) => {
        return datum.type === "resolved" ? 2 : 1;
      },
    },
  },
};

export default function Chart() {
  // TODO: fix sometimes all bubbles becomes blue, when change theme, this must happen
  return <VChart spec={spec} />;
}
