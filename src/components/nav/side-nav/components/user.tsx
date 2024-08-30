import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function User() {
  return (
    <div className="flex h-16 items-center border-b border-border px-2">
      <div className="flex w-full items-center justify-between rounded-md px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-800">
        <div className="flex items-center">
          <Image
            src="/avatar.png"
            alt="User"
            className="mr-2 rounded-full"
            width={36}
            height={36}
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <span className="text-xs text-muted-foreground">Agent Admin</span>
          </div>
        </div>
        <ChevronDown size={16} />
      </div>
    </div>
  );
}
