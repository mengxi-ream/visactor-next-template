import dynamic from "next/dynamic";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const Test = dynamic(() => import("./_components/test"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggle />
      <Button>Hello World</Button>
      <Test />
    </main>
  );
}
