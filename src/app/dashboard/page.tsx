import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { StatCard } from '@/components/dashboard/stat-card';
import { events, sports } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Calendar, Dumbbell, User } from 'lucide-react';

export default function DashboardPage() {
  const dashboardBg = PlaceHolderImages.find((img) => img.id === 'dashboard-bg');

  return (
    <div className="relative">
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center text-center text-white">
        {dashboardBg && (
          <Image
            src={dashboardBg.imageUrl}
            alt={dashboardBg.description}
            fill
            className="object-cover -z-10"
            priority
            data-ai-hint={dashboardBg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold md:text-6xl">Welcome to the Arena</h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Explore upcoming events, discover new sports, and get personalized recommendations to stay active.
          </p>
        </div>
      </section>

      <section className="container py-12 -mt-24">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard 
            title="Upcoming Events"
            value={events.length}
            icon={<Calendar className="h-8 w-8 text-primary" />}
            description="Don't miss out on the action!"
          />
          <StatCard
            title="Available Sports"
            value={sports.length}
            icon={<Dumbbell className="h-8 w-8 text-primary" />}
            description="Find your passion and join a team."
          />
          <StatCard
            title="Your Profile"
            value="Student"
            icon={<User className="h-8 w-8 text-primary" />}
            description="View and manage your information."
            isProfile={true}
          />
        </div>
      </section>

      <section className="container py-12">
        <div className="flex flex-col items-center justify-center bg-card p-8 rounded-lg shadow-sm border space-y-6 text-center">
            <h2 className="text-2xl font-bold">Ready to Dive In?</h2>
            <p className="text-muted-foreground">
                Your next adventure is just a click away. Browse all available sports and sign up for exciting events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                    <Link href="/dashboard/sports">View Sports <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                    <Link href="/dashboard/events">View Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
