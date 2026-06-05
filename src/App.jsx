// App root: manages which page component is shown and provides the main layout container.
import { Box } from '@mui/material'
import { useState } from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

// Import the main page container style. Use the exact filename casing used in the project.
import { mainPageContainer } from './styles/App.js'
import NavigationBar from './NavigationBar.jsx'

function App() {
  // Track which page component is currently displayed. We store the component instance
  // and swap it when the navigation bar requests a change.
  const [currentPage, setCurrentPage] = useState(<Home />)

  return (
    <>
      <Box sx={mainPageContainer}>
        {/* NavigationBar receives a setter to change the displayed page */}
        <NavigationBar setCurrentPage={setCurrentPage} />
        {currentPage}
      </Box>
    </>
  )
}

export default App
