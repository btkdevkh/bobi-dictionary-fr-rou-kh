"use client"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd"

import eng from "@/app/assets/images/flags/united-kingdom.png"
import fra from "@/app/assets/images/flags/france.png"
import rou from "@/app/assets/images/flags/romania.png"
import khm from "@/app/assets/images/flags/cambodia.png"
import Image from "next/image"

const Form = () => {
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
          Add New Word / Phrase
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <TextField
          label={<Image src={eng} width={20} height={20} alt="ENG" />}
          size="small"
          sx={{
            color: "#fff",
          }}
        />

        <TextField
          label={<Image src={fra} width={20} height={20} alt="FRA" />}
          size="small"
          sx={{
            color: "#fff",
          }}
        />

        <TextField
          label={<Image src={rou} width={20} height={20} alt="ROU" />}
          size="small"
          sx={{
            color: "#fff",
          }}
        />

        <TextField
          label={<Image src={khm} width={20} height={20} alt="KHM" />}
          size="small"
          sx={{
            color: "#fff",
          }}
        />

        <Button type="submit" variant="contained" sx={{ bgcolor: "#040b2e" }}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default Form
