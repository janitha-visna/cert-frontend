"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClientFilesToolbar } from "@/components/clientfiles/toolbar/ClientFilesToolbar";
import { CardGrid } from "@/components/clientfiles/cards/CardGrid";
import { useCardSearch } from "@/components/clientfiles/hooks/useCardSearch";

export default function TestPage() {
  const [search, setSearch] = useState("");

  const cards = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    content: "This is some sample content for the card.",
  }));

  const filteredCards = useCardSearch(cards, search);

  return (
    <div className="flex flex-col h-full min-w-0 ">
      {/* ✅ Responsive Page Header */}
      <div
        className="
          border-b
          p-4
          flex
          flex-col
          gap-4
          sm:gap-3
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Page title */}
        <h1 className="text-xl md:text-2xl lg:text-4xl dark:text-red-500">
          Test Page
        </h1>

        {/* Toolbar */}
        <ClientFilesToolbar search={search} onSearchChange={setSearch} />
      </div>
      <ScrollArea className="flex-1 w-full min-w-0 p-4">
        <CardGrid cards={filteredCards} />
      </ScrollArea>
    </div>
  );
}
