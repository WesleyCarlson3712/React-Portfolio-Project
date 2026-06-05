// Contact page: lists ways to reach you. Replace links/text below with your preferred contact info.
import { Typography, Box } from "@mui/material";
import { pageContainer, innerPageContainer, contactTextContainer } from "./styles/Page.js";

export default function Contact() {
  return (
    <>
      <Box sx={pageContainer}>
        <Box sx={innerPageContainer}>
          <Typography variant="h4">Contact me</Typography>
          <Typography variant="h6">
            If you would like to get in touch with me, you can reach me through any of the following methods:
          </Typography>

          {/* Container with clear left-aligned links */}
          <Box sx={contactTextContainer}>
            <ul>
              <li>
                {/* Using a mailto link makes it easy for visitors to start an email */}
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMSckHwFRDXvdDjdpwPPKnRkXhRPMmHsfCxcQxpjwKtdmZjTPktTpTzzqltpVFKpHNbKGzk" target="_blank" rel="noopener noreferrer">
                  Email: wesleycarlson3712@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/wesley-carlson-3340403ab/" target="_blank" rel="noopener noreferrer">
                  LinkedIn: linkedin.com/in/wesleycarlson
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/wesleycarlson3712/" target="_blank" rel="noopener noreferrer">
                  Instagram: instagram.com/wesleycarlson3712
                </a>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </>
  );
}
 