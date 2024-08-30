import {
  AverageTicketsCreated,
  Conversions,
  Metrics,
} from "@/components/chart";
import Container from "@/components/container";

// const Test = dynamic(() => import("./_components/test"), {
//   loading: () => <div>Loading...</div>,
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      <Metrics />
      <div className="grid grid-cols-1 divide-x divide-border border-b border-border tablet:grid-cols-3">
        <Container className="py-4 tablet:col-span-2">
          <AverageTicketsCreated />
        </Container>
        <Container className="py-4 tablet:col-span-1">
          <Conversions />
        </Container>
      </div>
    </div>
  );
}
