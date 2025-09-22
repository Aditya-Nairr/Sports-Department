import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { sports } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gamepad2, Info, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type SportDetailsPageProps = {
  params: { sportId: string };
};

export default function SportDetailsPage({ params }: SportDetailsPageProps) {
  const sport = sports.find((s) => s.id === params.sportId);

  if (!sport) {
    notFound();
  }

  return (
    <div className="bg-secondary/20">
        <div className="container py-12">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="/dashboard/sports">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sports
                </Link>
            </Button>

            <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-8">
                        <Image
                            src={sport.imageUrl}
                            alt={sport.name}
                            fill
                            className="object-cover"
                            data-ai-hint={sport.imageHint}
                        />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">{sport.name}</h1>
                    <p className="text-lg text-muted-foreground">
                        {sport.longDescription}
                    </p>
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <Info className="h-8 w-8 text-primary"/>
                            <CardTitle>Details</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center gap-4 text-sm">
                            <Users className="h-5 w-5 text-muted-foreground"/>
                            <span>Players: <Badge variant="secondary">{sport.players}</Badge></span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <Gamepad2 className="h-8 w-8 text-primary" />
                            <CardTitle>Rules</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                {sport.rules.map((rule, index) => (
                                    <li key={index}>{rule}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}
