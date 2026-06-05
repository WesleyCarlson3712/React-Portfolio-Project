// Home page: simple welcome message and profile image.
import { Typography, Box } from "@mui/material";
import { pageContainer, innerPageContainer, textContainer } from "./styles/Page.js";

export default function Home() {
  return (
    <>
      <Box sx={pageContainer}>
        <Box sx={innerPageContainer}>
          <Box sx={textContainer}>
            <Typography variant="h4">Welcome to My Portfolio</Typography>
            <Typography variant="h6">
              Hi! I'm Wesley Carlson. I'm a software engineering student at Brigham Young University Idaho.
            </Typography>
          </Box>
          {/* Profile image placed beneath the intro text */}
          <img src="/Me.png" alt="Profile" />
        </Box>
      </Box>
    </>
  );
}
