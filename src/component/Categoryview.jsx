import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, requirePropFactory, Typography } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Gifstate } from "../contextx/Data";
import { Link } from "react-router-dom";
function Categoryview() {
  let def='https://media2.giphy.com/media/oNm2dRZuaTlFRlRURx/200w.gif?cid=067f2878gohzxfvdfmr5tqlm1hh7qx2h8avplkqmwrcvuoti&ep=v1_gifs_search&rid=200w.gif&ct=g'
  const { view, gifmaindata, categoryview, setcategoryview } = Gifstate();

 let x= categoryview?categoryview:def;
  const downloadGif = async () => {
    try {
      const response = await fetch(x);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "GIF.gif"; // File name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(blobUrl); // Clean up memory
    } catch (error) {
      alert(error, "Some Error occurd in Fetchin data");
    }
  };


  useEffect(() => {
    
  }, [categoryview]);

  return (
    <>
      <Box
        sx={{
          margin: "4.5rem auto 0 auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={categoryview} //yaha use kiya sahi na
          sx={{
            width: {
              xs: "20rem",
              sm: "25rem",
              md: "30rem",
              lg: "40rem",
            },

            margin: "0 auto",
          }}
        />
        {/* dfghj */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            maxWidth: "300px",
            padding: "1rem",
            fontWeight: 700,
          }}
        >
          {/* {update ? update : view.url} */}

          <Button
            variant="contained"
            sx={{
              display: "flex",
              gap: ".5rem",
              padding: { sm: "2px 5px", md: "2px 5px", lg: "10px 15px" },
              fontWeight: 700,
            }}
            onClick={downloadGif}
          >
            Dowlode <CloudDownloadIcon />
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{
              display: "flex",
              gap: ".5rem",
              padding: { sm: "2px 5px", md: "2px 5px", lg: "10px 15px" },
              fontWeight: 700,
            }}
            onClick={() => {
              navigator.clipboard.writeText(x);
            }}
          >
            {" "}
            Copy Url
            <ContentCopyIcon />
          </Button>
        </Box>
      </Box>

    
    </>
  );
}

export default Categoryview;
