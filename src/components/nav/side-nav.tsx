import { cn } from "@/lib/utils";
import User from "./components/user";
import VisActor from "./components/visactor";

export default function SideNav({ className }: { className?: string }) {
  // TODO: mobile design
  return (
    <aside
      className={cn(
        "flex w-44 flex-col border-r border-border bg-slate-100 dark:bg-slate-900",
        className,
      )}
    >
      <User />
      <div className="flex-grow">123</div>
      <VisActor />
    </aside>
  );
}
