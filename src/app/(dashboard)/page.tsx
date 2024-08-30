import Metrics from "./_components/metrics";

// const Test = dynamic(() => import("./_components/test"), {
//   loading: () => <div>Loading...</div>,
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      {/* <Test /> */}
      <Metrics />
    </div>
  );
}
