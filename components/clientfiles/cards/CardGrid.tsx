import { CardItem } from "./CardItem";

interface CardData {
  id: number;
  companyName: string;
  clientFileNumber: string;
  schemaTypes: string[];
  nextAuditDate: string;
  status: "Active" | "Inactive";
  href?: string;
}

export function CardGrid({ cards }: { cards: CardData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 auto-rows-fr">
      {cards.map((card) => (
        <div key={card.id} className="flex flex-col h-full">
          <CardItem
            companyName={card.companyName}
            clientFileNumber={card.clientFileNumber}
            schemaTypes={card.schemaTypes}
            nextAuditDate={card.nextAuditDate}
            status={card.status}
            href={card.href}
          />
        </div>
      ))}
    </div>
  );
}

