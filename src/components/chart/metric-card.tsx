import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MetricCardProps } from "@/types/type";

export default function MetricCard({
  title,
  value,
  change,
  className,
}: MetricCardProps & { className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <h2 className="mb-1 text-sm text-muted-foreground">{title}</h2>
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium">{value}</span>
        <ChangeIndicator change={change} />
      </div>
      <div className="text-xs text-muted-foreground">Compare to last month</div>
    </div>
  );
}

function ChangeIndicator({ change }: { change: number }) {
  return (
    <span
      className={cn(
        "flex items-center rounded-sm px-1 py-0.5 text-xs text-muted-foreground",
        change > 0
          ? "bg-green-50 text-green-500 dark:bg-green-950 dark:text-green-400"
          : "bg-red-50 text-red-500 dark:bg-red-950 dark:text-red-400",
      )}
    >
      {change > 0 ? "+" : ""}
      {Math.round(change * 100)}%
      {change > 0 ? (
        <ArrowUpRight className="ml-0.5 inline-block h-3 w-3" />
      ) : (
        <ArrowDownRight className="ml-0.5 inline-block h-3 w-3" />
      )}
    </span>
  );
}
