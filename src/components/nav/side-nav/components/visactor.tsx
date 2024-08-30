import { VisActorLogo } from "@/components/icons";

export default function VisActor() {
  return (
    <div className="my-3 flex flex-col justify-center space-y-2 px-4">
      <span className="text-xs text-muted-foreground">Powered by</span>
      <div className="flex items-center space-x-2">
        <VisActorLogo size={24} />
        <span className="text-md text-accent-foreground">VisActor</span>
      </div>
    </div>
  );
}
