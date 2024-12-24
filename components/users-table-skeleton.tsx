'use client';

import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function UsersTableSkeleton() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <Skeleton className="h-10 w-[200px]" />
        <div className="border rounded-lg">
          <div className="border-b">
            <div className="grid grid-cols-5 p-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-[120px]" />
              ))}
            </div>
          </div>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="grid grid-cols-5 p-4 border-b last:border-0">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-[120px]" />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-[100px]" />
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-8" />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}