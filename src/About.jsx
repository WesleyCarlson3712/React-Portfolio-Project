import { Typography, Button, Box } from "@mui/material";
import { pageContainer } from "./styles/Page.js";

export default function About() {
  return (
    <>
      <Box sx={pageContainer}>
        {/* About page structure */}
        <Typography variant="h4">About Me</Typography>
        
        {/* Tell your story */}
        <Typography sx={{ mt: 2, mb: 2 }}>
          Add your background here. What brought you to programming?
        </Typography>
        
        {/* Skills section */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Skills:</Typography>
        <Typography>
          List your main skills here: React, JavaScript, CSS, etc.
        </Typography>
        
        {/* Education or experience */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Experience:</Typography>
        <Typography>
          Add your education, internships, or relevant experience.
        </Typography>
        
        <Button sx={{ mt: 3 }}>Download Resume</Button>
      </Box>
    </>
  );
}
 