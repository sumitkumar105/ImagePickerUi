import { Paper, Box, Grid, Container } from "@mui/material";
import Tabs from "./Components/Tabs";
import BrowsComponent from "./Components/BrowsComponent";
function App() {
  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12} lg={12}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            padding: "10px",
          }}
        >
          <Paper
            sx={{
              height: "400px",
              baackgroundColor: "grey",
              width: "400px",
              borderRadius: "24px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",

              flexDirection: "column",
            }}
          >
            <Tabs />

            <BrowsComponent />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
