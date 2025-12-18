// hooks/useCardSearch.ts
import { useMemo } from "react";

export function useCardSearch(cards: any[], search: string) {
  return useMemo(() => {
    if (!search) return cards;

    return cards.filter((card) =>
      card.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [cards, search]);
}
