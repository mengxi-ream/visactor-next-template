import Container from "@/components/container";
import TopNav from "@/components/nav/top-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav title="Dashboard" />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
