import { Typography, Button, Box } from "@mui/material";
import { pageContainer } from "./styles/Page.js";

export default function Projects() {
  return (
    <>
      <Box sx={pageContainer}>
        {/* Projects page heading */}
        <Typography variant="h4">My Projects</Typography>
        
        <Typography sx={{ mt: 2, mb: 3 }}>
          Here are some projects I've built. Each one taught me something new.
        </Typography>
        
        {/* Project 1 */}
        <Box sx={{ mb: 3, p: 2, border: "1px solid #ccc" }}>
          <Typography variant="h6">Project Title 1</Typography>
          <Typography sx={{ my: 1 }}>Brief description of what this project does.</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>Technologies: React, JavaScript, CSS</Typography>
          <Button size="small">View Live</Button>
          <Button size="small" sx={{ ml: 1 }}>View Code</Button>
        </Box>
        
        {/* Project 2 */}
        <Box sx={{ mb: 3, p: 2, border: "1px solid #ccc" }}>
          <Typography variant="h6">Project Title 2</Typography>
          <Typography sx={{ my: 1 }}>Brief description of what this project does.</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>Technologies: React, API, etc.</Typography>
          <Button size="small">View Live</Button>
          <Button size="small" sx={{ ml: 1 }}>View Code</Button>
        </Box>
      </Box>
    </>
  );
}
 