// Projects page: each project is shown in a `projectBox` whose flex direction can be
// toggled by passing "row" or "column" to the helper exported from `styles/Page.js`.
import { Typography, Button, Box } from "@mui/material";
import { pageContainer, innerPageContainer, projectBox, textContainer } from "./styles/Page.js";

export default function Projects() {
  return (
    <>
      <Box sx={pageContainer}>
        <Box sx={innerPageContainer}>
          <Box sx={textContainer}>
            <Typography variant="h4">My Projects</Typography>
            <Typography variant="h6">
              I have worked on several projects throughout my programming journey.
              I have always had an interest for game design and modding.
              Here are a few projects that I'm particularly proud of:
            </Typography>
          </Box>

          {/* Example: vertical layout (image below text) for the Hex project */}
          <Box sx={projectBox("column")}>
            <Box sx={textContainer}>
              <Typography variant="h4">Hex Battle Game</Typography>
              <Typography>
                I spent 2 weeks creating this strategy battle game in Python using the Arcade library.
                It takes place on a hexagonal grid and has an action menu on the right side of the screen.
                This project was my first time working with Arcade as well as my first time working with a hexagonal grid.
                I learned a lot from making this game and had a lot of fun with the process.
              </Typography>
              <Typography variant="h6">
                <a href="https://github.com/WesleyCarlson3712/2-week-game-project/tree/main" target="_blank" rel="noopener noreferrer">
                  Click here to view the code on github
                </a>
              </Typography>
            </Box>
            <img src="/hex_game_screenshot.png" alt="Hex Battle screenshot" />
          </Box>

          {/* Example: horizontal layout (image left, text right) for the Journal app */}
          <Box sx={projectBox("row")}>
            <img src="/journal_app_screenshot.png" alt="Journal app screenshot" />
            <Box sx={textContainer}>
              <Typography variant="h4">Journal App</Typography>
              <Typography>
                I spent 2 weeks creating this journal app in Kotlin using Android Studio.
                This app allows the user to create and view a list of journal entries, each with a title, body, and date.
                Entries can be edited and deleted, and the app will save the user's data even after closing the app.
                This was my first time working with Android Studio and Kotlin, and I learned a lot from the experience.
              </Typography>
              <Typography variant="h6">
                <a href="https://github.com/WesleyCarlson3712/android-journal-app" target="_blank" rel="noopener noreferrer">
                  Click here to view the code on github
                </a>
              </Typography>
            </Box>
          </Box>

          {/* Button linking to my full GitHub profile */}
          <Button variant="contained" href="https://github.com/WesleyCarlson3712">
            View All Projects
          </Button>
        </Box>
      </Box>
    </>
  );
}
 