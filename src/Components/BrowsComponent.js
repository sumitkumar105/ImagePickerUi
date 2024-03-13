import React from "react";
import { Box, Typography } from "@mui/material";
const BrowsComponent = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F7F9FB",
          borderRadius: " 0px 0px 24px 24px",
        }}
      >
        <Box
          sx={{
            height: "300px",
            width: "400px",
            border: "3px dashed lightgrey",
            borderRadius: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#D3D3D3,",
          }}
        >
          <Typography sx={{ color: "#D3D3D3" }}>
            Click to Brows or drag and drop your files
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default BrowsComponent;
