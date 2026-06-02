import { Typography, Button, Box } from "@mui/material";
import { pageContainer, innerPageContainer } from "./styles/Page.js";

export default function Home() {
  return (
    <>
      <Box sx={pageContainer}>
        <Box sx={innerPageContainer}>
          <Typography variant="h4">Welcome to My Portfolio</Typography>
          <Box>
            <Typography variant="h6">Hi! I'm Wesley Carlson.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
