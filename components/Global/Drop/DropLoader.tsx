import { Skeleton } from "@nextui-org/react";

export default function DropLoader({ loader }: { loader: boolean }) {
  if (loader) {
    return (
      <div className="flex justify-between gap-[40px] items-center">
        <Skeleton className="h-3 w-full rounded-lg" />
        <Skeleton className="w-[30px]  h-[30px] rounded-[30px]" />
      </div>
    );
  }
}
