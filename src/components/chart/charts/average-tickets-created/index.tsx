import { FilePlus2 } from "lucide-react";
import ChartTitle from "../../components/chart-title";
import Chart from "./chart";
import { DatePickerWithRange } from "./date-range-picker";

export default function AverageTicketsCreated() {
  return (
    <section className="flex h-full flex-col gap-2">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <ChartTitle title="Average Tickets Created" icon={FilePlus2} />
        <DatePickerWithRange className="" />
      </div>
      <div className="h-96">
        <Chart />
      </div>
    </section>
  );
}
