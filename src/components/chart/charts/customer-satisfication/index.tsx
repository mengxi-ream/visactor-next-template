import { SmilePlus } from "lucide-react";
import { customerSatisfication } from "@/data/customer-satisfication";
import ChartTitle from "../../components/chart-title";
import LinearProgress from "./components/linear-progress";

export default function CustomerSatisfication() {
  const { positive, neutral, negative } = customerSatisfication;

  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Customer Satisfication" icon={SmilePlus} />
      <div className="">
        <LinearProgress
          label="Positive"
          color="#5fb67a"
          percentage={positive}
        />
        <LinearProgress label="Neutral" color="#f5c36e" percentage={neutral} />
        <LinearProgress
          label="Negative"
          color="#da6d67"
          percentage={negative}
        />
      </div>
    </section>
  );
}
