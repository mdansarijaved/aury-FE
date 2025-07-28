import { BrushCleaningIcon, Calendar, Cat, Home, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/base/sidebar";
import { ROUTES } from "@/routes/routes";

const items = [
  {
    title: "Dashboard",
    url: ROUTES.root,
    icon: Home,
  },
  {
    title: "Cats",
    url: ROUTES.cats.root,
    icon: Cat,
  },
  {
    title: "Events",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Tasks",
    url: ROUTES.tasks,
    icon: BrushCleaningIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className=" bg-white" collapsible="icon">
      <SidebarHeader className="bg-white overflow-clip">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Cat className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm min-w-40 leading-tight">
              <span className="truncate font-medium  ">Aury Tracker</span>
              <span className="truncate text-xs">
                Managing Aury is easy now!
              </span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-[#F2EDE8] text-sm   rounded-2xl "
                    tooltip={item.title}
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
      {/* <SidebarFooter className="bg-white">
        <Button className="bg-[#F2E3D6] hover:bg-[#F2E3D6] rounded-2xl flex items-center gap-2 text-black ">
          <Plus /> Add Cat
        </Button>
      </SidebarFooter> */}
    </Sidebar>
  );
}
