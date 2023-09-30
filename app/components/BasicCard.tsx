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
  return (
    <Grid item>
      <Card
        sx={{
          minWidth: 275,
          bgcolor: "#ddd",
          borderRadius: 3,
          flexBasis: "100%",
          mb: 1,
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, textAlign: "left" }}
            color="text.secondary"
            gutterBottom
          >
            Word of the Day
          </Typography>

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
                      {lang.text}
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
