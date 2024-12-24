'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/lib/api';
import { DataTable } from '@/components/data-table';
import { columns } from '@/components/columns';
import { Card } from '@/components/ui/card';
import { UsersTableSkeleton } from '@/components/users-table-skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  if (isLoading) {
    return (
      <main className="container mx-auto py-10">
        <UsersTableSkeleton />
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto py-10">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load users. Please try again later.
          </AlertDescription>
        </Alert>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl py-6 text-center">User Managament Table</h1>
      <Card className="p-6">
        <DataTable
          data={users || []}
          columns={columns}
          pageCount={Math.ceil((users?.length || 0) / 10)}
          currentPage={currentPage}
        />
      </Card>
    </main>
  );
}