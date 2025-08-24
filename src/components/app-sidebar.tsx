import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { authAPi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api"
import Logo from "@/assets/Logo/Logo"
import { getSidebarItem } from "@/utils/getSidebarItems"
import { Button } from "./ui/button"
import { useAppDispatch } from "@/redux/hook"

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { data: userData } = useUserInfoQuery(undefined)

  const data = {
    navMain: getSidebarItem(userData?.data?.role)
  }

const [logout] = useLogoutMutation()
const dispatch = useAppDispatch()

const handleLogout = async () => {
  try {
    await logout(undefined).unwrap()  // ✅ নিশ্চিতভাবে resolve হওয়া পর্যন্ত wait করবে
    dispatch(authAPi.util.resetApiState())
  } catch (error) {
    console.error("Logout failed:", error)
  }
}

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/"><Logo /></Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <div className="p-2">
          <Button onClick={handleLogout} className="w-full">Logout</Button>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}