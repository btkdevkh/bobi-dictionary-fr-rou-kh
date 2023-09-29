"use client"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd"

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
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          New Word Or Phrase
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
          label="FR"
          size="small"
          sx={{
            color: "#fff",
          }}
        />

        <TextField
          label="ROU"
          size="small"
          sx={{
            color: "#fff",
          }}
        />

        <TextField
          label="KH"
          size="small"
          sx={{
            color: "#fff",
          }}
        />
      </Box>
    </Box>
  )
}

export default Form
