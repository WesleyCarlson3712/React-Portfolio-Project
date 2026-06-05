import { Typography, Button, Box } from "@mui/material";
import { pageContainer, innerPageContainer} from "./styles/Page.js";

export default function About() {
  return (
    <>
      <Box sx={pageContainer}>
        <Box sx={innerPageContainer}>
          <Typography variant="h4">A Little Bit About Me</Typography>
          <Typography variant="h6" >
            Hello, my name is Wesley and I have lived in Madison, Alabama my whole life. I am 17 years old and have 3 siblings. I love playing racquetball, swimming, and gaming. I've been taking BYUI classes online for almost 2 years now and I have been doing all my school online since 2020. I have worked with Javascript, Python, C#, C++, XML, and a small mount of HTML, CSS, Kotlin, LUA. I hope to work as a software engineer in the future, and would prefer a remote position where I can still spend time with my family at home during the day.
          </Typography>
          <img src="/me_with_siblings.png" alt="Portfolio"/>
        </Box>
      </Box>
    </>
  );
}
 