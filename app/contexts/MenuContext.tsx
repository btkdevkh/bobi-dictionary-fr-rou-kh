"use client"

import { createContext, useContext, ReactNode, useState } from "react"

type MenuContext = {
  menuOpen: boolean
  toggleDrawer: () => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const MenuContext = createContext<MenuContext>({
  menuOpen: false,
  toggleDrawer: () => () => {},
})

export function useMenuContext() {
  return useContext(MenuContext)
}

type MenuProviderProps = {
  children: ReactNode
}

export default function MenuProvider({ children }: MenuProviderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setMenuOpen((prev) => !prev)
    }

  const menuData = {
    menuOpen,
    toggleDrawer,
  }

  return (
    <MenuContext.Provider value={menuData}>{children}</MenuContext.Provider>
  )
}
