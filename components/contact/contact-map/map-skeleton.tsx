import { Skeleton } from "@heroui/react";

export const MapSkeleton: React.FC = () => (
  <div className="w-full h-full flex flex-col space-y-4 p-6">
    <div className="flex items-center space-x-4">
      <Skeleton className="rounded-lg">
        <div className="h-12 w-12 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-2 flex-1">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </div>

    <div className="flex-1 space-y-3">
      <div className="grid grid-cols-3 gap-3 h-full">
        <div className="space-y-3">
          <Skeleton className="rounded-lg h-16">
            <div className="h-16 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="rounded-lg h-12">
            <div className="h-12 rounded-lg bg-default-300" />
          </Skeleton>
        </div>
        <div className="space-y-3">
          <Skeleton className="rounded-lg h-20">
            <div className="h-20 rounded-lg bg-default-300" />
          </Skeleton>
          <Skeleton className="rounded-lg h-24">
            <div className="h-24 rounded-lg bg-default-200" />
          </Skeleton>
        </div>
        <div className="space-y-3">
          <Skeleton className="rounded-lg h-12">
            <div className="h-12 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="rounded-lg h-16">
            <div className="h-16 rounded-lg bg-default-300" />
          </Skeleton>
          <Skeleton className="rounded-lg h-20">
            <div className="h-20 rounded-lg bg-default-200" />
          </Skeleton>
        </div>
      </div>
    </div>

    {/* Bottom controls simulation */}
    <div className="flex justify-between items-center">
      <div className="flex space-x-2">
        <Skeleton className="rounded-lg">
          <div className="h-8 w-8 rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-8 w-8 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
      <Skeleton className="w-2/5 rounded-lg">
        <div className="h-6 w-2/5 rounded-lg bg-default-200" />
      </Skeleton>
    </div>
  </div>
);
