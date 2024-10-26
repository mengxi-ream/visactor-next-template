import type { LucideIcon } from "lucide-react";
import { chartTitle } from "@/components/primitives";

export default function ChartTitle({
  title,
  icon: Icon,
}: {
  title: string;
  icon?: LucideIcon;
}) {
  return (
    <h2 className={`${chartTitle({})} flex items-center`}>
      {Icon && <Icon className="mr-2 shrink-0 text-primary" size={16} />}{" "}
      {title}
    </h2>
  );
}
