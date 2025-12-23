"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

interface CardItemProps {
  companyName: string;
  clientFileNumber: string;
  schemaTypes: string[];
  nextAuditDate: string;
  status: "Active" | "Inactive";
  href?: string;
}

export function CardItem({
  companyName,
  clientFileNumber,
  schemaTypes,
  nextAuditDate,
  status,
  href = "#",
}: CardItemProps) {
  return (
    <a
      href={href}
      className="block h-full focus:outline-none focus:ring-2 focus:ring-ring rounded-lg"
    >
      <Card
        className="
    h-full flex flex-col
    bg-white dark:bg-gray-800
    cursor-pointer
    transform transition-transform duration-200 ease-out
    hover:scale-105 hover:shadow-lg
  "
      >
        {/* 🔹 Card Header */}
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-bold text-gray-900 dark:text-white">
            {companyName}
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {clientFileNumber}
          </p>
        </CardHeader>

        {/* 🔹 Card Content */}
        <CardContent className="flex-1 flex flex-col gap-3">
          {/* Schema Types */}
          <div className="flex flex-wrap gap-2">
            {schemaTypes.map((type) => (
              <span
                key={type}
                className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {type}
              </span>
            ))}
          </div>

          {/* Next Audit */}
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <CalendarIcon className="w-4 h-4" />
            <span>
              <span className="font-semibold">Next Audit:</span> {nextAuditDate}
            </span>
          </div>
        </CardContent>

        {/* 🔹 Card Footer */}
        <CardFooter className="pt-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              status === "Active"
                ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
            }`}
          >
            {status}
          </span>
        </CardFooter>
      </Card>
    </a>
  );
}
