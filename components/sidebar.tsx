"use client";
import React from 'react'
import { usePathname } from "next/navigation";

interface sidebarProps {
  children: React.ReactNode
}

function sidebar ({children}: sidebarProps) {
  const pathName = usePathname();
  return (
    <div>{children}</div>
  )
}

export default sidebar