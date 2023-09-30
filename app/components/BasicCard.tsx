"use client"

import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Image from "next/image"

import eng from "@/app/assets/images/flags/united-kingdom.png"
import fra from "@/app/assets/images/flags/france.png"
import rou from "@/app/assets/images/flags/romania.png"
import khm from "@/app/assets/images/flags/cambodia.png"

const bull = (lang: string) => (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    {lang === "ENG" ? (
      <Image src={eng} width={25} height={25} alt={lang} />
    ) : lang === "FRA" ? (
      <Image src={fra} width={25} height={25} alt={lang} />
    ) : lang === "ROU" ? (
      <Image src={rou} width={25} height={25} alt={lang} />
    ) : (
      <Image src={khm} width={25} height={25} alt={lang} />
    )}
  </Box>
)

export default function BasicCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        bgcolor: "#ddd",
        borderRadius: 3,
        flexBasis: "100%",
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

        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <div style={{ width: 40 }}>{bull("ENG")}</div>

          <Typography variant="h6" component="div" sx={{ fontSize: 15 }}>
            Thanks a lot
          </Typography>
        </Box>

        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <div style={{ width: 40 }}>{bull("FRA")}</div>

          <Typography variant="h6" component="div" sx={{ fontSize: 15 }}>
            Merci beaucoup
          </Typography>
        </Box>

        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <div style={{ width: 40 }}>{bull("ROU")} </div>
          <Typography variant="h6" component="div" sx={{ fontSize: 15 }}>
            Mulţumesc mult
          </Typography>
        </Box>

        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <div style={{ width: 40 }}>{bull("KHM")} </div>
          <Typography variant="h6" component="div" sx={{ fontSize: 15 }}>
            អរគុណច្រើន <small style={{ fontSize: 12 }}>(arkoun chraen)</small>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
