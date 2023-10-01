"use client"

import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import TranslateIcon from "@mui/icons-material/Translate"
import { useMenuContext } from "../contexts/MenuContext"
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd"
import CssBaseline from "@mui/material/CssBaseline"
// import TemporaryDrawer from "./TemporaryDrawer"
// import MenuIcon from "@mui/icons-material/Menu"

import eng from "@/app/assets/images/flags/united-kingdom.png"
import fra from "@/app/assets/images/flags/france.png"
import rou from "@/app/assets/images/flags/romania.png"
import khm from "@/app/assets/images/flags/cambodia.png"
import Image from "next/image"
import { useSearchContext } from "../contexts/SearchContext"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

const SearchAppBar = () => {
  const { toggleDrawer } = useMenuContext()
  const { handleSearchTerm } = useSearchContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#081e42" }}>
        <Toolbar sx={{ display: "flex", gap: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
            onClick={() => toggleDrawer()}
          >
            <BookmarkAddIcon color="primary" titleAccess="Add Word/Phrase" />
          </IconButton>

          <TranslateIcon />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Dictionnaire
          </Typography>

          <Box display="flex" gap={1}>
            <Image src={eng} width={20} height={20} alt="ENG" />
            <Image src={fra} width={20} height={20} alt="FRA" />
            <Image src={rou} width={20} height={20} alt="ROU" />
            <Image src={khm} width={20} height={20} alt="KHM" />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearchTerm(e.target.value.toLowerCase())}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* <TemporaryDrawer menuOpen={menuOpen} toggleDrawer={toggleDrawer} /> */}
    </Box>
  )
}

export default SearchAppBar
