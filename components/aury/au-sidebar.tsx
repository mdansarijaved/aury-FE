import {
  Calendar,
  Cat,
  FileChartColumn,
  Home,
  Inbox,
  Plus,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/base/sidebar";
import { Button } from "../base/button";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Cats",
    url: "#",
    icon: Cat,
  },
  {
    title: "Events",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Reports",
    url: "#",
    icon: FileChartColumn,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="p-5 bg-white" collapsible="icon">
      <SidebarHeader className="bg-white">
        <p className="text-black">Aury Tracker</p>
        <span className="text-xs text-[#8C7059]">
          Managing Aury is easy now!
        </span>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-[#F2EDE8] text-sm  leading-5 rounded-2xl "
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <Button className="bg-[#F2E3D6] hover:bg-[#F2E3D6] rounded-2xl flex items-center gap-2 text-black ">
          <Plus /> Add Cat
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
