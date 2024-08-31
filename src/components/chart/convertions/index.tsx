import { CirclePercent } from "lucide-react";
import { convertions } from "@/data/convertions";
import { formatNumber } from "@/lib/utils";
import ChartTitle from "../components/chart-title";
import Chart from "./components/chart";

export default function Convertions() {
  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Conversions" icon={CirclePercent} />
      <Indicator />
      <div className="relative w-full flex-grow">
        <Chart />
      </div>
    </section>
  );
}

function Indicator() {
  return (
    <div className="mt-3">
      <span className="mr-1 text-2xl font-medium">
        {formatNumber(convertions.reduce((acc, curr) => acc + curr.value, 0))}
      </span>
      <span className="text-muted-foreground/60">Sales</span>
    </div>
  );
}