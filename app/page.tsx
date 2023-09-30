"use client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Form from "./components/Form"
import BasicCard from "./components/BasicCard"
import { useMenuContext } from "./contexts/MenuContext"
import useCollection from "./hooks/useCollection"
import { dictionaryCollection } from "./firebase/config"
import Language from "./models/Language"
import Grid from "@mui/material/Grid"

const Home = () => {
  const { menuOpen } = useMenuContext()
  const { documents: languages } = useCollection(dictionaryCollection)

  return (
    <Container sx={{ mt: 2 }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          {languages &&
            languages.length > 0 &&
            languages.map((item: Language) => {
              return <BasicCard language={item} key={item.uid} />
            })}
        </Grid>

        <br />
      </Grid>

      {menuOpen && (
        <Box>
          <Form />
        </Box>
      )}
    </Container>
  )
}

export default Home
