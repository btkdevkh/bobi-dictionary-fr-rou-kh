"use client"

import Box from "@mui/material/Box"
import Form from "./components/Form"
import BasicCard from "./components/BasicCard"
import { useMenuContext } from "./contexts/MenuContext"
import useCollection from "./hooks/useCollection"
import { dictionaryCollection } from "./firebase/config"
import Language from "./models/Language"
import Grid from "@mui/material/Grid"
import { useSearchContext } from "./contexts/SearchContext"
import Modal from "@mui/material/Modal"
import Loading from "./loading"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "90%",
  transform: "translate(-50%, -50%)",
}

const HomePage = () => {
  const { menuOpen, toggleDrawer } = useMenuContext()
  const { term } = useSearchContext()
  const { documents: languages } = useCollection(dictionaryCollection)

  return (
    <>
      {!languages && <Loading />}

      <Grid container spacing={1} mb={1.5}>
        {languages &&
          languages.length > 0 &&
          languages
            .filter((f: Language) =>
              f.langs.some((f) =>
                f.text.toLowerCase().includes(term.toLowerCase())
              )
            )
            .map((item: Language) => {
              return <BasicCard language={item} key={item.uid} />
            })}
      </Grid>

      <Modal open={menuOpen} onClose={toggleDrawer}>
        <Box sx={{ ...style, minWidth: 320, maxWidth: 600 }}>
          <Form />
        </Box>
      </Modal>
    </>
  )
}

export default HomePage
