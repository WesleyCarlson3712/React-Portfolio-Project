// Simple navigation bar: buttons tell the parent `App` which page component to show.
import { Button, Box } from "@mui/material";
import * as styles from "./styles/NavigationBar.js";
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

function NavigationBar({ setCurrentPage }) {
  // Each button calls `setCurrentPage` with a component instance.
  // This keeps routing simple for a small portfolio site.
  return (
    <Box sx={styles.navigationBar}>
      <Button onClick={() => { setCurrentPage(<Home />) }} sx={styles.navButton}>Home</Button>
      <Button onClick={() => { setCurrentPage(<About />) }} sx={styles.navButton}>About</Button>
      <Button onClick={() => { setCurrentPage(<Projects />) }} sx={styles.navButton}>Projects</Button>
      <Button onClick={() => { setCurrentPage(<Contact />) }} sx={styles.navButton}>Contact</Button>
    </Box>
  );
}

export default NavigationBar;