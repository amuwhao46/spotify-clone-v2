"use client";
import React, { useMemo } from 'react'
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

interface sidebarProps {
  children: React.ReactNode
}

function sidebar ({children}: sidebarProps) {
  const pathname = usePathname();
  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: "Home",
      active: pathname !== "/search",
      href: "/",
    },
    {
      icon: BiSearch,
      label: "Search",
      active: pathname !== "/search",
      href: "/search",
    }
  ], [pathname])
  return (
    <div>{children}</div>
  )
}

export default sidebar