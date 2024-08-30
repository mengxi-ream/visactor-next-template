import Container from "@/components/container";
import TopNav from "@/components/nav/top-nav";

export default function TicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav title="Ticket" />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
