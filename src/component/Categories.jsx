import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Gifstate } from "../contextx/Data";
import { data, Link } from "react-router-dom";
function Categories({ menu, setmenue }) {
  let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let [categoritmsitms, setcategoriesitms] = useState([]);

  const { gifmaindata, filter, setfilter } = Gifstate();

  let fecthingcategory = async () => {
    try {
      const { data } = await gifmaindata.categories();
      setcategoriesitms(data);
    } catch (error) {
      alert(error, "Some Error occured in Fetchin data");
    }
  };
  useEffect(() => {
    fecthingcategory();
  }, []);
  useEffect(() => {}, [filter]);

  return (
    <>
      <Drawer
        open={menu}
        onClose={() => {
          setmenue(false);
        }}
        anchor="top"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "50%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center  ",
            background: "#166ec5",
            padding: "0 2%",
          }}
        >
          <Typography variant="h4" color="initial">
            Categories
          </Typography>
          <CancelIcon
            fontSize="2rem"
            onClick={() => setmenue(false)}
            sx={{ fontSize: "2.5rem", color: "red" }}
          />
        </Box>
        <Divider />
        <List
          sx={{
            columnCount: { xs: 3, sm: 3, md: 4, lg: 4 },
            columnGap: "0.2rem",
            background: "#166ec5",
            textAlign: "center",
          }}
        >
          {categoritmsitms.map((e, i) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category"}
                key={i}
                onClick={() => {
                  setfilter(e.name_encoded);
                }}
              >
                <ListItemButton>
                  <Typography
                    variant="p"
                    color="initial"
                    sx={{
                      textTransform: "capitalize",
                      textAlign: "center",
                      border: "1px solid white",
                      padding: ".3rem",
                    }}
                  >
                    {e.name_encoded}
                  </Typography>
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Categories;
