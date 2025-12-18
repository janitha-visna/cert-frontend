"use client";
import { X, Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/clientfiles/serachinput";
import { Label } from "@/components/ui/label";
export default function TestPage() {
  const [schema, setSchema] = useState("all");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const cards = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    content: "This is some sample content for the card.",
  }));

  return (
    <div className="flex flex-col h-full w-full min-w-0">
      {/* Page Header */}
      <div className="border-b p-4 bg-background">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl md:text-2xl lg:text-4xl dark:text-red-500">
            Test Page
          </h1>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <SearchInput />

            <div className="flex items-center gap-2">
              <Label className="whitespace-nowrap">System Certification:</Label>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select system" />
                </SelectTrigger>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Label className="whitespace-nowrap">Schema:</Label>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Schema" />
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <ScrollArea className="flex-1 p-4">
        <div className="grid w-full min-w-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Card key={card.id}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>{card.content}</CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
