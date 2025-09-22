import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Event } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 w-full">
        <Image
            src={event.imageUrl}
            alt={event.name}
            fill
            className="object-cover"
            data-ai-hint={event.imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        </div>
        <CardHeader>
            <CardTitle>{event.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <CardDescription>{event.description}</CardDescription>
        </CardContent>
        <CardFooter>
            <Button asChild className="w-full transition-transform duration-300 hover:scale-105">
                <Link href={`/dashboard/events/apply/${event.id}`}>
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </CardFooter>
    </Card>
  );
}
