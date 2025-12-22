"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ExternalLink } from "lucide-react";

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
    <div className="relative group h-full">
      {/* Main Card */}
      <a href={href} target="_self" rel="noopener noreferrer">
        <Card className="p-4 flex flex-col gap-3 border shadow-sm hover:shadow-md transition cursor-pointer h-full bg-white dark:bg-gray-800">
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <CardHeader className="p-0">
              <CardTitle className="text-sm font-bold text-gray-900 dark:text-white">
                {companyName}
              </CardTitle>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {clientFileNumber}
              </p>
            </CardHeader>

            {/* Schema / Type badges */}
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
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 mt-2">
              <CalendarIcon className="w-4 h-4 text-gray-700 dark:text-gray-200" />
              <span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Next Audit:
                </span>{" "}
                {nextAuditDate}
              </span>
            </div>
          </div>

          {/* Status at bottom */}
          <div className="mt-auto text-sm">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                status === "Active"
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                  : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
              }`}
            >
              {status}
            </span>
          </div>
        </Card>
      </a>

      {/* Hover overlay for desktop only */}
      <div className="hidden md:group-hover:flex absolute inset-0 bg-black/40 items-center justify-center gap-2 transition-all rounded-md">
        <a
          href={href}
          target="_self"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white text-black  hover:bg-gray-200 text-sm font-semibold rounded-full"
        >
          Open
        </a>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white text-black hover:bg-gray-200 text-sm font-semibold flex items-center gap-1 rounded-full"
        >
          Open in New Tab <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
