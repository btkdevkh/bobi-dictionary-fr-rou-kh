"use client"

import { useState, FormEvent } from "react"

import Image from "next/image"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd"

import eng from "@/app/assets/images/flags/united-kingdom.png"
import fra from "@/app/assets/images/flags/france.png"
import rou from "@/app/assets/images/flags/romania.png"
import khm from "@/app/assets/images/flags/cambodia.png"
import useDocument from "../hooks/useDocument"
import { dictionaryCollection } from "../firebase/config"
import { useMenuContext } from "../contexts/MenuContext"
import Language from "../models/Language"
import { Timestamp } from "firebase/firestore"
import Alert from "@mui/material/Alert"

enum LANG {
  ENG = "ENG",
  FRA = "FRA",
  ROU = "ROU",
  KHM = "KHM",
}

const Form = () => {
  const { toggleDrawer, lang } = useMenuContext()
  const { addDocument, updateDocument } = useDocument(dictionaryCollection)

  const [english, setEnglish] = useState(
    lang ? lang.langs.find((l) => l.code === "ENG")?.text : ""
  )
  const [french, setFrench] = useState(
    lang ? lang.langs.find((l) => l.code === "FRA")?.text : ""
  )
  const [romania, setRomania] = useState(
    lang ? lang.langs.find((l) => l.code === "ROU")?.text : ""
  )
  const [cambodia, setCambodia] = useState(
    lang ? lang.langs.find((l) => l.code === "KHM")?.text : ""
  )
  const [err, setErr] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (french === "" || romania === "") {
      setErr("Please enter Romanian and French at least")
      return
    }

    const data: Language = {
      langs: [
        {
          code: LANG.ENG,
          text: english ? english.trim() : "",
        },
        {
          code: LANG.FRA,
          text: french ? french.trim() : "",
        },
        {
          code: LANG.ROU,
          text: romania ? romania.trim() : "",
        },
        {
          code: LANG.KHM,
          text: cambodia ? cambodia.trim() : "",
        },
      ],
      createdAt: Timestamp.fromMillis(Date.now()),
    }

    if (lang && lang.uid) {
      data.uid = lang.uid
      await updateDocument(data)
      toggleDrawer()
      return
    }

    await addDocument(data)

    setEnglish("")
    setFrench("")
    setRomania("")
    setCambodia("")

    toggleDrawer()
  }

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "#ddd",
        borderRadius: 3,
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <BookmarkAddIcon color="primary" />
        <Typography
          sx={{
            color: "#000",
            mb: 1,
            textAlign: "center",
          }}
        >
          {lang?.uid ? `Edit this Word / Phrase` : "Add New Word / Phrase"}
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <TextField
            label={<Image src={rou} width={18} height={18} alt="ROU" />}
            size="small"
            sx={{
              color: "#fff",
            }}
            value={romania}
            onChange={(e) => setRomania(e.target.value)}
          />

          <TextField
            label={<Image src={fra} width={18} height={18} alt="FRA" />}
            size="small"
            sx={{
              color: "#fff",
            }}
            value={french}
            onChange={(e) => setFrench(e.target.value)}
          />

          <TextField
            label={
              <Box display="flex" alignItems="center" gap={1}>
                <Image src={khm} width={18} height={18} alt="KHM" />
                <small>Optional</small>
              </Box>
            }
            size="small"
            sx={{
              color: "#fff",
            }}
            value={cambodia}
            onChange={(e) => setCambodia(e.target.value)}
          />

          <TextField
            label={
              <Box display="flex" alignItems="center" gap={1}>
                <Image src={eng} width={18} height={18} alt="ENG" />
                <small>Optional</small>
              </Box>
            }
            size="small"
            sx={{
              color: "#fff",
            }}
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
          />

          {err && <Alert severity="error">{err}</Alert>}

          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "#040b2e", ":hover": { bgcolor: "#122647" } }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Form
