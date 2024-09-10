import { SmilePlus } from "lucide-react";
import ChartTitle from "../../components/chart-title";

export default function CustomerSatisfication() {
  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Customer Satisfication" icon={SmilePlus} />
      <div className="relative w-full flex-grow">{/* <Chart /> */}</div>
    </section>
  );
}
