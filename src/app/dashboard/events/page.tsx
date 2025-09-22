import { events } from '@/lib/data';
import { EventCard } from '@/components/events/event-card';

export default function EventsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Upcoming Events</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Get involved, compete, and have fun.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={event.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
