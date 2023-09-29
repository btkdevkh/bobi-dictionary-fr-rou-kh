import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Form from "./components/Form"
import BasicCard from "./components/BasicCard"

const Home = () => {
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
            <BasicCard />
            <BasicCard />
          </Box>

          <br />

          <Box>
            <Form />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
