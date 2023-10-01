"use client"

import { createContext, useContext, ReactNode, useState } from "react"
import Language from "../models/Language"

type MenuContext = {
  menuOpen: boolean
  lang: Language | null
  toggleDrawer: () => void
  handleGetDataToUpdate: (in_data: Language) => void
  handleSetDataToNull: () => void
}

const MenuContext = createContext<MenuContext>({
  menuOpen: false,
  lang: null,
  toggleDrawer: () => {},
  handleGetDataToUpdate: () => {},
  handleSetDataToNull: () => {},
})

export function useMenuContext() {
  return useContext(MenuContext)
}

type MenuProviderProps = {
  children: ReactNode
}

export default function MenuProvider({ children }: MenuProviderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<Language | null>(null)

  const toggleDrawer = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleGetDataToUpdate = (in_lang: Language) => {
    setLang(in_lang)
  }

  const handleSetDataToNull = () => {
    setLang(null)
  }

  const menuData = {
    menuOpen,
    lang,
    toggleDrawer,
    handleGetDataToUpdate,
    handleSetDataToNull,
  }

  return (
    <MenuContext.Provider value={menuData}>{children}</MenuContext.Provider>
  )
}
