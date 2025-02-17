import React, { useEffect, useState } from "react";
import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import NavMidScroller from "./NavMidScroller";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import logo from "../assets/gif.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./HeaderX.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Categories from "./Categories";
import FavourateX from "./FavourateX";
import { Link } from "react-router-dom";
import { Gifstate } from "../contextx/Data";
function HeaderX() {
  const [menu, setmenue] = useState(false);
  const [fav, setfav] = useState(false);

  
  useEffect(() => {
  }, []);
  return (
    <>
      <AppBar
        className="navcont"
        position="fixed"
        sx={{
          color: "black",
          bgcolor: "#1976d2",
          display: "flex",
          justifyContent: "space-between",
          height: {xs:'7vh',sm:'9vh' ,md:'7vh'},
          marginTop: "-5px",
          alignItem: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Mr.
              <Box
                component="img"
                src={logo}
                height={{ xs: "25px", sm: "30px", md: "30px", lg: "30px" }}
              />
            </Typography>
          </Link>
          <Box
            sx={{
              width: "100%",
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: ".8rem",
            }}
          >
           
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: ".7rem",
            }}
          >
            <Typography
              onClick={() => {
                setmenue((prev) => !prev);
              }}
              variant="h6"
              mt={1.2}
              sx={{
                fontSize: "1.2rem",
                marginTop: {
                  xs: ".0rem",
                  sm: ".0rem",
                  md: ".0rem",
                  lg: ".0rem",
                },
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "block",
                },
              }}
            >
              <MoreVertIcon fontSize="2rem" />
            </Typography>
            <Typography
              variant="h6"
              display={"flex"}
              sx={{
                fontSize: "1.2rem",
                marginTop: {
                  xs: ".1rem",
                  sm: ".1rem",
                  md: ".2rem",
                  lg: ".2rem",
                },
              }}
            >
              <AccountCircleIcon fontSize="2rem" />
            </Typography>
            <Typography
              onClick={() => {
                setfav((prev) => !prev);
              }}
              variant="h6"
              display={"flex"}
              sx={{
                fontSize: "1.2rem",
                marginTop: {
                  xs: ".1rem",
                  sm: ".1rem",
                  md: ".2rem",
                  lg: ".2rem",
                },
              }}
            >
              <FavoriteIcon fontSize="2rem" />
            </Typography>
            <Categories menu={menu} setmenue={setmenue} />
            <FavourateX fav={fav} setfav={setfav} />
          </Box>
        </Toolbar>
      </AppBar>
      <NavMidScroller />
    </>
  );
}
export default HeaderX;
