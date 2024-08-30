import { cn } from "@/lib/utils";
import User from "./components/user";

export default function SideNav({ className }: { className?: string }) {
  // TODO: mobile design
  return (
    <aside className={cn("w-44 border-r border-border", className)}>
      <User />
    </aside>
  );
}
