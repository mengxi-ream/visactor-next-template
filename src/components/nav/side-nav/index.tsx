import Navigation from "./components/navigation";
import User from "./components/user";
import VisActor from "./components/visactor";

export default function SideNav() {
  // TODO: mobile design
  return (
    <aside className="flex w-44 shrink-0 flex-col border-r border-border bg-slate-100 dark:bg-slate-900">
      <User />
      <Navigation />
      <VisActor />
    </aside>
  );
}
