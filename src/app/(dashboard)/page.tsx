import dynamic from "next/dynamic";

const Test = dynamic(() => import("./_components/test"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function Home() {
  return (
    <section>
      <Test />
    </section>
  );
}
