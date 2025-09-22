import { notFound } from 'next/navigation';
import Link from 'next/link';
import { events } from '@/lib/data';
import { ApplicationForm } from '@/components/events/application-form';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type EventApplicationPageProps = {
  params: { eventId: string };
};

export default function EventApplicationPage({ params }: EventApplicationPageProps) {
  const event = events.find((e) => e.id === params.eventId);

  if (!event) {
    notFound();
  }

  return (
    <div className="container max-w-2xl py-12">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/dashboard/events">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
            </Link>
        </Button>
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Apply for {event.name}</h1>
            <p className="text-muted-foreground mt-2">Complete the form below to register for the event.</p>
        </div>
        <ApplicationForm />
    </div>
  );
}
