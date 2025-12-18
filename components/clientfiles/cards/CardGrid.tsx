// components/clientfiles/cards/CardGrid.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CardGrid({ cards }: { cards: any[] }) {
  return (
    <div
      className="grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-4"
    >
      {cards.map((card) => (
        <Card  key={card.id}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>{card.content}</CardContent>
        </Card>
      ))}
    </div>
  );
}
