"use client"

import eng from "@/app/assets/images/flags/united-kingdom.png"
import fra from "@/app/assets/images/flags/france.png"
import rou from "@/app/assets/images/flags/romania.png"
import khm from "@/app/assets/images/flags/cambodia.png"
import Image from "next/image"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { Sofia } from "next/font/google"
import useCollection from "../hooks/useCollection"
import { dictionaryCollection } from "../firebase/config"

const sofia = Sofia({
  weight: "400",
  subsets: ["latin"],
})

const Footer = () => {
  const { documents: languages } = useCollection(dictionaryCollection)

  return (
    <>
      {languages && languages.length > 0 && (
        <Box mb={1}>
          <Box display="flex" gap={1} justifyContent="center" mb={0.5}>
            <Image src={rou} width={20} height={20} alt="ROU" />
            <Image src={khm} width={20} height={20} alt="KHM" />
            <Image src={fra} width={20} height={20} alt="FRA" />
            <Image src={eng} width={20} height={20} alt="ENG" />
          </Box>
          <Typography className={sofia.className} textAlign="center">
            By Bobi & Bibo
          </Typography>
        </Box>
      )}
    </>
  )
}

export default Footer
