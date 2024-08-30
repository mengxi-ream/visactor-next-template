import Container from "../container";
import { ThemeToggle } from "../theme-toggle";

export default function TopNav({ title }: { title: string }) {
  return (
    <nav className="h-16 border-b border-border">
      <Container className="flex h-full items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <ThemeToggle />
      </Container>
    </nav>
  );
}
