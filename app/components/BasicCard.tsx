"use client"

import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import Divider from "@mui/material/Divider"
import Language from "../models/Language"
import Grid from "@mui/material/Grid"

import eng from "@/app/assets/images/flags/united-kingdom.png"
import fra from "@/app/assets/images/flags/france.png"
import rou from "@/app/assets/images/flags/romania.png"
import khm from "@/app/assets/images/flags/cambodia.png"
import EditIcon from "@mui/icons-material/Edit"

import { Timestamp } from "firebase/firestore"
import IconButton from "@mui/material/IconButton"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import useDocument from "../hooks/useDocument"
import { dictionaryCollection } from "../firebase/config"
import { useMenuContext } from "../contexts/MenuContext"

enum LANG {
  ENG = "ENG",
  FRA = "FRA",
  ROU = "ROU",
  KHM = "KHM",
}

const bull = (lang: string) => (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    {lang === LANG.ENG ? (
      <Image src={eng} width={25} height={25} alt={lang} />
    ) : lang === LANG.FRA ? (
      <Image src={fra} width={25} height={25} alt={lang} />
    ) : lang === LANG.ROU ? (
      <Image src={rou} width={25} height={25} alt={lang} />
    ) : (
      <Image src={khm} width={25} height={25} alt={lang} />
    )}
  </Box>
)

type BasicCardProps = {
  language: Language
}

const BasicCard = ({ language }: BasicCardProps) => {
  const { toggleDrawer, handleGetDataToUpdate } = useMenuContext()
  const { deleteDocument } = useDocument(dictionaryCollection)

  const handleDelete = async (language: Language) => {
    if (language.uid) {
      if (confirm("Are you sur to delete it ?")) {
        await deleteDocument(language)
      }
    }
  }

  const handleUpdate = async (language: Language) => {
    toggleDrawer()
    handleGetDataToUpdate(language)
  }

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card
        sx={{
          minWidth: 275,
          color: "#fff",
          bgcolor: "#081e42",
          borderRadius: 3,
          flexBasis: "100%",
          height: 250,
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{ fontSize: 14, textAlign: "left", color: "#fff" }}
              color="text.secondary"
              gutterBottom
            >
              Published:{" "}
              {Timestamp.fromMillis(language.createdAt.toMillis())
                .toDate()
                .toDateString()}
            </Typography>

            <Box>
              <IconButton onClick={() => handleUpdate(language)}>
                <EditIcon fontSize="small" color="info" sx={{ opacity: 0.5 }} />
              </IconButton>
              <IconButton onClick={() => handleDelete(language)}>
                <DeleteOutlineIcon
                  fontSize="small"
                  color="info"
                  sx={{ opacity: 0.1 }}
                />
              </IconButton>
            </Box>
          </Box>

          <Divider />

          <br />

          {language.langs &&
            language.langs.length > 0 &&
            language.langs.map((lang) => {
              return (
                <Box key={lang.code} sx={{ mb: 0.5 }}>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <div style={{ width: 40 }}>{bull(lang.code)}</div>

                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontSize: 15 }}
                    >
                      {lang.text ? lang.text : "n/a"}
                    </Typography>
                  </Box>
                </Box>
              )
            })}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default BasicCard
