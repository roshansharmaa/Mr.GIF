import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Maincomp({ imgs }) {
  return (
    <>
      <Box
        key={imgs}
        sx={{
          marginTop: { xs: "3.8rem", sm: "4.2rem", md: "4.2rem", lg: "4.2rem" },
          columnCount: { xs: 2, sm: 3, md: 4, lg: 5 },
          columnGap: "0.2rem",
          width: "100%",
          bgcolor: "#002c59",
        }}
      >
        {imgs.map((e, i) => {
          return (
            <Link to="/view">
              <Box
                component="img"
                key={i}
                src={e}
                sx={{
                  width: "98%",
                  marginBottom: "1rem",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                  borderRadius: ".5rem",
                }}
              >
                
              </Box>
            </Link>
          );
        })}
      </Box>
    </>
  );
}

export default Maincomp;
