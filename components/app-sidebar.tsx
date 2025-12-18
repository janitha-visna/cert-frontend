"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import { LayoutDashboard, CalendarDays, FolderKanban } from "lucide-react";


import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme.toggle";
// This is sample data.
const data = {
  user: {
    name: "shadcna",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: CalendarDays,
      items: [
        {
          title: "My Calendar",
          url: "/calendar/my",
        },
        {
          title: "Team Calendar",
          url: "/calendar/team",
        },
      ],
    },
    {
      title: "Client Files",
      url: "/clients",
      icon: FolderKanban,
      items: [
        {
          title: "All Clients",
          url: "/clients",
        },
        {
          title: "Active Clients",
          url: "/clients/active",
        },
        {
          title: "Archived Clients",
          url: "/clients/archived",
        },
      ],
    },
  ],

  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>

      <SidebarFooter className="flex items-center justify-between gap-2 px-2">
        <ThemeToggle />
        <NavUser user={data.user} />

        {/* Dark mode toggle */}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}