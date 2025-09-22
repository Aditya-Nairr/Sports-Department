import Image from 'next/image';
import { LoginForm } from '@/components/auth/login-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dumbbell } from 'lucide-react';

export default function LoginPage() {
  const loginBg = PlaceHolderImages.find((img) => img.id === 'login-bg');
  
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="flex items-center space-x-3">
              <Dumbbell className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold tracking-tight">Sports Department</h1>
            </div>
            <p className="text-sm text-muted-foreground">MES ABASAHEB GARWARE</p>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="relative hidden lg:block">
        {loginBg && (
          <Image
            src={loginBg.imageUrl}
            alt={loginBg.description}
            fill
            className="object-cover"
            data-ai-hint={loginBg.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </main>
  );
}
