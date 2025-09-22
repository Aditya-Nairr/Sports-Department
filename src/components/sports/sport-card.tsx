import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Sport } from '@/lib/data';

type SportCardProps = {
  sport: Sport;
};

export function SportCard({ sport }: SportCardProps) {
  return (
    <Link href={`/dashboard/sports/${sport.id}`} className="group block">
        <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
            <div className="relative h-48 w-full">
            <Image
                src={sport.imageUrl}
                alt={sport.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={sport.imageHint}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            </div>
            <CardHeader>
                <CardTitle>{sport.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{sport.description}</CardDescription>
            </CardContent>
        </Card>
    </Link>
  );
}
