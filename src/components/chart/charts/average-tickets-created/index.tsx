import { FilePlus2 } from "lucide-react";
import ChartTitle from "../../components/chart-title";
import Chart from "./chart";

export default function AverageTicketsCreated() {
  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Average Tickets Created" icon={FilePlus2} />
      <div className="h-96">
        <Chart />
      </div>
    </section>
  );
}
