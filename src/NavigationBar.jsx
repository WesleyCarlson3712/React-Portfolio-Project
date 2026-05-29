import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import * as styles from "./styles/NavigationBar.js";
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

function NavigationBar({setCurrentPage}) {
  return (
    <Box sx={styles.navigationBar}>
      <Button onClick={()=>{setCurrentPage(<Home/>)}} sx={styles.navButton}>{"Home"}</Button>
      <Button onClick={()=>{setCurrentPage(<About/>)}} sx={styles.navButton}>{"About"}</Button>
      <Button onClick={()=>{setCurrentPage(<Projects/>)}} sx={styles.navButton}>{"Projects"}</Button>
      <Button onClick={()=>{setCurrentPage(<Contact/>)}} sx={styles.navButton}>{"Contact"}</Button>
    </Box>
  );
}

export default NavigationBar;