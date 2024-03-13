import * as React from "react";
import { Box, Stack, Paper } from "@mui/material";
import ButtonComponent from "./Controls/ButtonComponent";
import filterImage from "../Assets/filter.png";
function Tabs() {
  return (
    <Box>
      <Stack direction="row" spacing={12} alignItems="center">
        <Box
          sx={{
            height: "30px",
            width: "auto",
            backgroundColor: "#F7F9FB",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            padding: "12px",
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <ButtonComponent text="New Upload" variant="contained" status="1" />
            <ButtonComponent text="Recent" variant="text" status="0" />
          </Stack>
        </Box>
        <Paper
          sx={{ height: "25px", borderRadius: "48px", padding: "10px" }}
          elevation={1}
        >
          <img height="100%" width="100%" src={filterImage} alt="filter" />
        </Paper>
      </Stack>
    </Box>
  );
}
export default Tabs;
