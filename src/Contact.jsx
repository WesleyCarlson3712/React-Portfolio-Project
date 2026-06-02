import { Typography, Button, Box } from "@mui/material";
import { pageContainer } from "./styles/Page.js";

export default function Contact() {
  return (
    <>
      <Box sx={pageContainer}>
        {/* Contact page heading */}
        <Typography variant="h4">Get In Touch</Typography>
        
        <Typography sx={{ mt: 2, mb: 3 }}>
          I'd love to hear from you. Here are the best ways to reach me:
        </Typography>
        
        {/* Contact methods */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Email:</Typography>
          <Typography>your-email@example.com</Typography>
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Phone:</Typography>
          <Typography>(123) 456-7890</Typography>
        </Box>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Social Links:</Typography>
          <Typography>
            <a href="#">LinkedIn</a> | <a href="#">GitHub</a> | <a href="#">Twitter</a>
          </Typography>
        </Box>
        
        <Button variant="contained">Send Email</Button>
      </Box>
    </>
  );
}
 