import { Typography, Button, Box } from "@mui/material";
import { pageContainer, innerPageContainer } from "./styles/Page.js";

export default function About() {
  return (
    <>
      <Box sx={pageContainer}>
        <Box sx={innerPageContainer}>
          <Typography variant="h4">About</Typography>
          
        </Box>
      </Box>
    </>
  );
}
 