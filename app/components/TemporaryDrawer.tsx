"use client"

import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd"

type TemporaryDrawerProps = {
  menuOpen: boolean
  toggleDrawer: (open: boolean) => void
}

const TemporaryDrawer = ({ menuOpen, toggleDrawer }: TemporaryDrawerProps) => {
  return (
    <Box>
      <Drawer
        anchor="bottom"
        open={menuOpen}
        onClose={toggleDrawer(false) as any}
      >
        <Box sx={{ bgcolor: "#040b2e", color: "#fff" }}>
          <List>
            {["Words", "Phrases"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    console.log(123)
                  }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <BookmarkAddIcon color="primary" />
                    ) : (
                      <BookmarkAddIcon color="primary" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text.toUpperCase()} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default TemporaryDrawer
