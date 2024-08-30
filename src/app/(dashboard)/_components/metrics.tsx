import MetricCard from "@/components/chart/metric-card";
import Container from "@/components/container";
import { metrics } from "@/data/metrics";

export default function Metrics() {
  return (
    <Container className="grid grid-cols-1 gap-y-6 border-b border-border py-4 phone:grid-cols-2 desktop:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </Container>
  );
}
