import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Maincomp({ imgs }) {
  return (
    <>
      <Box
        sx={{
          margin: "4.5rem auto 0 auto",
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
              />
            </Link>
          );
        })}
      </Box>
    </>
  );
}

export default Maincomp;
