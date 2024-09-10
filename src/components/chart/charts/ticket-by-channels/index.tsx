import { Rss } from "lucide-react";
import ChartTitle from "../../components/chart-title";

export default function TicketByChannels() {
  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Ticket By Channels" icon={Rss} />
      <div className="relative w-full flex-grow">{/* <Chart /> */}</div>
    </section>
  );
}
