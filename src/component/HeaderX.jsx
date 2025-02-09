import React, { useEffect, useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Input,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import logo from "../assets/gif.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./HeaderX.css";
import { capitalize } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Categories from "./Categories";
import FavourateX from "./FavourateX";
import { Link } from "react-router-dom";
function HeaderX() {
  const [menu, setmenue] = useState(false);
  const [fav, setfav] = useState(false);

  return (
    <>
      <Container>
        <AppBar
          className="navcont"
          position="fixed"
          sx={{
            color: "black",
            bgcolor: "#1976d2",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/">
              <Typography
                variant="h3"
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
                  height={{ xs: "50px", sm: "60px", md: "50px", lg: "60px" }}
                />
              </Typography>
            </Link>

            {/* <Input placeholder="Type in here…" variant="solid" /> */}
            {/* <Input placeholder="Type in here…" variant="outlined" color="primary" /> */}
            <Box
              sx={{
                width: "100%",
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="Serch here"
                name=""
                id=""
                style={{ width: "40%", padding: ".7rem", background: "white" }}
              />
              <Link to="/home">
                <ArrowCircleRightOutlinedIcon
                  sx={{ fontSize: "2.5rem", color: "white" }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <Link to="/">
                <Typography variant="h5">Reactions</Typography>
              </Link>
              <Link to="/home">
                <Typography variant="h5">Entertainment</Typography>
              </Link>
              <Link to="/">
                <Typography variant="h5">Sports</Typography>
              </Link>

              <Link to="/home">
                <Typography variant="h5">Stickers</Typography>
              </Link>

              <Link to="/">
                <Typography variant="h5">Artists</Typography>
              </Link>

              <Typography
                onClick={() => {
                  setmenue((prev) => !prev);
                }}
                variant="h5"
                mt={1.2}
                sx={{
                  marginTop: {
                    xs: ".2rem",
                    sm: ".5rem",
                    md: ".4rem",
                    lg: ".3rem",
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
                variant="h4"
                display={"flex"}
                sx={{
                  marginTop: {
                    xs: ".3rem",
                    sm: ".3rem",
                    md: ".4rem",
                    lg: ".4rem",
                  },
                }}
              >
                <AccountCircleIcon fontSize="2rem" />
              </Typography>
              <Typography
                onClick={() => {
                  setfav((prev) => !prev);
                }}
                variant="h4"
                display={"flex"}
                sx={{
                  marginTop: {
                    xs: ".3rem",
                    sm: ".3rem",
                    md: ".4rem",
                    lg: ".4rem",
                  },
                }}
              >
                <FavoriteIcon fontSize="2rem" />
              </Typography>
              <Categories menu={menu} setmenue={setmenue} />
              {/* <FavoriteX fav={fav} setfav={setfav} />
< */}
              <FavourateX fav={fav} setfav={setfav} />
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
export default HeaderX;
