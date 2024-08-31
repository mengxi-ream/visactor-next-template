import { FilePlus2 } from "lucide-react";
import ChartTitle from "../components/chart-title";
import Chart from "./components/chart";

export default function AverageTicketsCreated() {
  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Average Tickets Created" icon={FilePlus2} />
      <div className="relative w-full flex-grow">
        <Chart />
      </div>
    </section>
  );
}
