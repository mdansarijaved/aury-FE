"use client";
import {
  BrushCleaningIcon,
  Calendar,
  Cat,
  ChevronRight,
  Home,
  Plus,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter,
  useSidebar,
} from "@/components/base/sidebar";
import { ROUTES } from "@/routes/routes";
import Link from "next/link";

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
    url: ROUTES.events,
    icon: Calendar,
  },
  {
    title: "Tasks",
    url: ROUTES.tasks.view.list,
    icon: BrushCleaningIcon,
  },
  {
    title: "Settings",
    url: ROUTES.settings,
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (url === ROUTES.root) {
      return pathname === "/";
    }
    return pathname === url;
  };

  return (
    <Sidebar className={`p-[18px] bg-white`} collapsible="icon">
      <SidebarHeader className="bg-white overflow-clip relative">
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
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent className="">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`hover:bg-[#F2EDE8] text-sm rounded-2xl ${
                      isActive(item.url)
                        ? "bg-[#F2EDE8] text-black font-medium"
                        : ""
                    }`}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      {isActive(item.url) ? (
                        <item.icon stroke="black" fill="black" />
                      ) : (
                        <item.icon />
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white overflow-clip">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarTrigger className="size-8 flex-1 hover:bg-black hover:text-white bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square items-center justify-center rounded-lg " />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
