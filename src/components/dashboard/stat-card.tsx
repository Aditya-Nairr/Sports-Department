'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect, useState } from 'react';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
  isProfile?: boolean;
};

export function StatCard({ title, value, icon, description, isProfile = false }: StatCardProps) {
    const [rollNo, setRollNo] = useState<string | null>(null);

    useEffect(() => {
        if (isProfile) {
            const storedRollNo = localStorage.getItem('studentRollNo');
            setRollNo(storedRollNo);
        }
    }, [isProfile]);

  return (
    <Card className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
            {isProfile ? (rollNo || 'N/A') : value}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
