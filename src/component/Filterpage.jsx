import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Gifstate } from "../contextx/Data";
import CategoryIcon from '@mui/icons-material/Category';
function Filterpage() {
  const {  gifmaindata, filter, categoryview, setcategoryview } = Gifstate();
  let [filterdata, setfilterdata] = useState([]);
  const search = async () => {
    try {
      const { data } = await gifmaindata.search(filter ? filter : "Action", {
        sort: "recent",
      });
      setfilterdata(data);
    } catch (error) {
      alert(error, "Some Error occurd in Fetchin data");
    }
  };


  

  // ma();
  useEffect(() => {
    search();
  }, [filter]);
  return (
    <>
      <Typography variant="h5" color="initial" mb={2} borderRadius={'0px 10px'}  bgcolor='#1976d2' width='300px' alignItems="center">
        <CategoryIcon fontSize="2rem" />  Category:- {filter ? filter : "Action"}
      </Typography>
      <Box
        sx={{
          marginTop: {},
          columnCount: { xs: 2, sm: 3, md: 5, lg: 5 },
          columnGap: "0.2rem",
          width: "100%",
        }}
      >
        {!filterdata ? (
          <>No Item Selected</>
        ) : (
          filterdata.map((e, i) => {
            return (
              <Link to={"/category/view"} key={i}>
                <Box
                  component="img"
                  src={e.images.fixed_width.url}
                  onClick={() => setcategoryview(e.images.fixed_width.url)}
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
          })
        )}
      </Box>
    </>
  );
}

export default Filterpage;
