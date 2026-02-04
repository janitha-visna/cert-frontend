"use client";

import { useState } from "react";
import { Sidebar } from "@/components/certificationlifecycle/Sidebar";
import { TopBar } from "@/components/certificationlifecycle/TopBar";
import { ProgressTimeline } from "@/components/certificationlifecycle/ProgressTimeline";
import { StageCard } from "@/components/certificationlifecycle/StageCard";
import { ClientSelector } from "@/components/certificationlifecycle/ClientSelector";
import { ThemeProvider } from "@/components/certificationlifecycle/ThemeProvider";
import { initialStages } from "@/components/certificationlifecycle/certificationStages";

export type StageStatus = "not-started" | "in-progress" | "completed";

export interface Document {
  id: string;
  name: string;
  uploaded: boolean;
  uploadDate?: string;
  fileUrl?: string;
}

export interface Stage {
  id: string;
  name: string;
  shortName: string;
  status: StageStatus;
  documents: Document[];
  progress: number;
  type: "standard" | "audit" | "review" | "surveillance";
  nonConformities?: {
    major: number;
    minor: number;
  };
}


export default function Page() {
  const [stages, setStages] = useState<Stage[]>(initialStages);

  const [selectedClient] = useState({
    name: "Acme Manufacturing Ltd.",
    certType: "ISO 9001:2015",
    startDate: "2024-01-15",
  });

  const handleDocumentUpload = (stageId: string, docId: string) => {
    setStages((prev) =>
      prev.map((stage) => {
        if (stage.id === stageId) {
          const updatedDocs = stage.documents.map((d) =>
            d.id === docId
              ? {
                  ...d,
                  uploaded: true,
                  uploadDate: new Date().toISOString().split("T")[0],
                }
              : d
          );

          const uploadedCount = updatedDocs.filter((d) => d.uploaded).length;
          const progress = Math.round(
            (uploadedCount / updatedDocs.length) * 100
          );

          return {
            ...stage,
            documents: updatedDocs,
            progress,
            status:
              progress === 100
                ? "completed"
                : progress > 0
                ? "in-progress"
                : "not-started",
          };
        }
        return stage;
      })
    );
  };

  const handleMarkComplete = (stageId: string) => {
    setStages((prev) =>
      prev.map((stage) => {
        if (stage.id === stageId) {
          const allUploaded = stage.documents.every((d) => d.uploaded);
          if (allUploaded) {
            return { ...stage, status: "completed", progress: 100 };
          }
        }
        return stage;
      })
    );
  };

  const isStageUnlocked = (index: number) => {
    if (index === 0) return true;
    return stages[index - 1].status === "completed";
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
        <Sidebar stages={stages} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar client={selectedClient} />

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <ClientSelector client={selectedClient} />

              <ProgressTimeline stages={stages} />

              <div className="mt-8 space-y-6">
                {stages.map((stage, index) => (
                  <StageCard
                    key={stage.id}
                    stage={stage}
                    stageNumber={index + 1}
                    isUnlocked={isStageUnlocked(index)}
                    onDocumentUpload={handleDocumentUpload}
                    onMarkComplete={handleMarkComplete}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
