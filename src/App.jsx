import { Button, Typography, Box} from '@mui/material'
import { useState } from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

import {mainPageContainer} from './styles/app.js'
import NavigationBar from './Navigationbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(<Home/>)

  function incrementCounter(){
    setCount(count + 1)
  };
  
  return (
    <>
      <Box sx={mainPageContainer}>
        <NavigationBar setCurrentPage={setCurrentPage}/>
        {currentPage}
      </Box>
      {/* {renderPage()} */}
    </>
    )
}


export default App
