"use client"

import { createContext, useContext, ReactNode } from "react"

type MenuContext = {
  menuOpen: boolean
}

const MenuContext = createContext<MenuContext>({
  menuOpen: false,
})

export function useMenuContext() {
  return useContext(MenuContext)
}

type MenuProviderProps = {
  children: ReactNode
}

export default function MenuProvider({ children }: MenuProviderProps) {
  return (
    <MenuContext.Provider value={{ menuOpen: false }}>
      {children}
    </MenuContext.Provider>
  )
}
