import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

function FavourateX({ fav, setfav }) {
  let x = ["fav", 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Drawer
        open={fav}
        onClose={() => {
          setfav(false);
        }}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "50%",
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center  ",
          }}
        >
          <Typography
            variant="p"
            sx={{ color: "black", fontSize: { md: "1rem", lg: "2rem" } }}
          >
            Favourate
          </Typography>
          <CancelIcon
            onClick={() => setfav(false)}
            sx={{ fontSize: "2rem", color: "red" }}
          />
        </Box>{" "}
        <Divider />
        <List>
          {x.map((e, i) => {
            return (
              <ListItemButton
                key={i}
                onClick={() => {
                  setopen(false);
                }}
              >
                <ListItemText primary={e} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default FavourateX;
