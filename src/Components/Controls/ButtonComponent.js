import React from "react";
import { Button } from "@mui/material";
const ButtonComponent = ({ text, variant, status }) => {
  return (
    <>
      <Button
        variant={variant}
        sx={{
          borderRadius: "24px",
          backgroundColor: status === "1" ? "black" : "none",
          color: status == "0" ? "black" : "white",
          fontWeight: "bold",
        }}
      >
        {text}
      </Button>
    </>
  );
};
export default ButtonComponent;
