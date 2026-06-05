import { Typography, Button, Box } from "@mui/material";
import { pageContainer, innerPageContainer, textContainer} from "./styles/Page.js";

export default function Home() {
  return (
    <>
      <Box sx={pageContainer}>
        <Box sx={innerPageContainer}>
          <Typography variant="h4">Welcome to My Portfolio</Typography>
          <Typography variant="h6">
            Hi! I'm Wesley Carlson. I'm a software engineering student at Brigham Young University Idaho.
          </Typography>
          <img src="/Me.png" alt="Portfolio"/>
        </Box>
      </Box>
    </>
  );
}
