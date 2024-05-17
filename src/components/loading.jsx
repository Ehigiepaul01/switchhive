import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = ({ className }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-[90vh]">
      <div
        className={cn(
          "border-t-4 border-blue-900 border-solid h-10 w-10 rounded-full animate-spin",
          className
        )} />
    </div>
  );
};

export default Loading;


export const TableSkeletonLoader = () => (
  <div className="p-4 border border-gray-200 rounded-md">
    <div className="flex items-center justify-between gap-4 mb-4">
      <Skeleton className="w-1/4 h-4" />
      <Skeleton className="w-1/4 h-4" />
      <Skeleton className="w-1/4 h-4" />
    </div>
  </div>
)


export const CardSkeletonLoader = () => (
  <div className="p-4 border border-gray-200 rounded-md">
    <div className="flex items-center justify-between gap-5 mb-4">
      <Skeleton className="w-1/4 h-20" />
      <Skeleton className="w-1/4 h-20" />
      <Skeleton className="w-1/4 h-20" />
      <Skeleton className="w-1/4 h-20" />
    </div>
  </div>
)