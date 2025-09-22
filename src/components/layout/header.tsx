'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { NavLinks } from './nav-links';
import { Dumbbell, LogOut } from 'lucide-react';

export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('studentRollNo');
    }
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/dashboard" className="mr-6 flex items-center space-x-3">
          <Dumbbell className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="font-bold sm:inline-block text-lg">
              Sports Department
            </span>
            <span className="text-xs text-muted-foreground">MES ABASAHEB GARWARE</span>
          </div>
        </Link>
        <NavLinks />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
