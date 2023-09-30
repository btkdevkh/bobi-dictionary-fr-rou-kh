"use client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Form from "./components/Form"
import BasicCard from "./components/BasicCard"
import { useMenuContext } from "./contexts/MenuContext"

const Home = () => {
  const { menuOpen, toggleDrawer } = useMenuContext()

  return (
    <Box sx={{ mt: 1 }}>
      <Container>
        {/* List */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
            }}
          >
            <BasicCard />
          </Box>

          <br />

          {menuOpen && (
            <Box>
              <Form />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default Home
