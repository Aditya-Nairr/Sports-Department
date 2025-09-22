import { sports } from '@/lib/data';
import { SportCard } from '@/components/sports/sport-card';

export default function SportsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Explore Our Sports</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From the court to the field, find your competitive edge.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sports.map((sport) => (
          <SportCard key={sport.id} sport={sport} />
        ))}
      </div>
    </div>
  );
}
