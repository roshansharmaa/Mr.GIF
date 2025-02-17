import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Gifstate } from "../contextx/Data";
import Dropdown from "./Dropdown";
function NavMidScroller() {
  let [trending, settrending] = useState("");
  let [finalarray, setfinalarray] = useState([]);
  const { gifmaindata, filter, setfilter, favourate } = Gifstate();
  let fecthingcategory = async () => {
    try {
      const { data } = await gifmaindata.categories();
      settrending(data);
    } catch (error) {
      alert(error, "Some Error occurd in Fetchin data");
    }
  };
  let arr = [];

  useEffect(() => {
    fecthingcategory();
  }, [trending]);
  return (
    <Box
      sx={{
        mt: {
          xs: "3.5rem",
          sm: "3rem",
        },
        mb: ".5rem",
      }}
    >
      {trending ? (
        trending.map((e) => {
          let firstword = e.name.split(" ");
          for (let i = 0; i < firstword.length; i++) {
            firstword[i].length > 4 ? arr.push(firstword[i]) : <></>;
          }
        })
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
      <Box>
        {/* <Box
          sx={{
            background:
              "linear-gradient(87deg, #12599f 0%, rgba(91, 153, 148, 0) 49%, #12599f 100%)",
            display: "flex",
            flexDirection: "row",
            gap: ".5rem",
            padding: " 0 .3rem",
            justifyContent:'space-between'
          }}
        > */}
        {/* <Dropdown/> */}
        <Dropdown arr={arr} />

        {/* </Box> */}
      </Box>
    </Box>
  );
}
export default NavMidScroller;
