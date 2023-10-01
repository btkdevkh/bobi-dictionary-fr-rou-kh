"use client"

import { createContext, useContext, ReactNode, useState } from "react"

type SearchContext = {
  term: string
  handleSearchTerm: (in_term: string) => void
}

const SearchContext = createContext<SearchContext>({
  term: "",
  handleSearchTerm: () => {},
})

export function useSearchContext() {
  return useContext(SearchContext)
}

type MenuProviderProps = {
  children: ReactNode
}

export default function SearchProvider({ children }: MenuProviderProps) {
  const [term, setTerm] = useState("")

  const handleSearchTerm = (in_term: string) => {
    setTerm(in_term)
  }

  const searchData = {
    term,
    handleSearchTerm,
  }

  return (
    <SearchContext.Provider value={searchData}>
      {children}
    </SearchContext.Provider>
  )
}
