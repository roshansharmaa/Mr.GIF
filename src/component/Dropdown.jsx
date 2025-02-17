import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Gifstate } from "../contextx/Data";
import { Link } from "react-router-dom";
function Dropdown({ arr }) {
  const { filter, setfilter } = Gifstate();
  useEffect(() => {
  }, [filter]);
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        width: "100%",
        p: 0.2, // Optional padding
        maxWidth: { xs: "400px", sm: "768px", md: "1024", lg: "1450px" },
        margin: "0px auto",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          padding: ".3rem 0rem",
          minWidth: 140,
          backgroundColor: "#1976d2",
          borderRadius: "15px",
          margin: 1,
        }}
      >
        <Typography
          textAlign={"left"}
          p={"0 10px"}
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          Trendings🔥
          <ArrowForwardIosIcon />
        </Typography>
      </Box>

      {arr ? (
        arr.slice(0, 25).map((e, i) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/category"}
            key={i}
          >
            <Box
              sx={{
                padding: ".3rem 0rem",
                minWidth: 100,
                backgroundColor: "#1976d2",
                borderRadius: "15px",
                margin: 1,
                cursor: "pointer",
              }}
              onClick={()=>setfilter(e)}
            >
              <Typography textAlign={"center"} p={"0 10px"}>
                {e.length >= 8 ? <>{e.slice(0, 7)}..</> : e}
              </Typography>
            </Box>
          </Link>
        ))
      ) : (
        <Box
          sx={{
            padding: ".3rem 0rem",
            minWidth: 100,
            backgroundColor: "#1976d2",
            borderRadius: "15px",
            margin: 1,
          }}
        >
          <Typography textAlign={"center"} p={"0 10px"}>
            Loding...
          </Typography>
        </Box>
      )}
      {/* Add more items if needed */}
    </Box>
  );
}

export default Dropdown;
