import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Gifstate } from "../contextx/Data";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function Filterpage() {
  const {  gifmaindata, filter, setlaststate } = Gifstate();
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
      <Typography variant="h6" color="initial">
        {" "}
        <WorkspacePremiumIcon fontSize="2rem" color="info" /> Not Dowlodabel (
        View only ) Category:- {filter ? filter : "Action"}
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
              <Link to={"/view"} key={i}>
                <Box
                  component="img"
                  src={e.images.fixed_width.url}
                  onClick={() => setlaststate(e.images.fixed_width.url)}
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
