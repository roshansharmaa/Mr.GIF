import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, requirePropFactory, Typography } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Home from "./Home";
import { Gifstate } from "../contextx/Data";
import { Link } from "react-router-dom";
function GifView() {
  const { view, gifmaindata, laststate} =
    Gifstate();
  const [releted, setreleted] = useState([]);
  const [update, setupdate] = useState(false);


    const gifUrl = update ? update : view.url;
  
    const downloadGif = async () => {
      try {
        const response = await fetch(gifUrl);
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
        alert(error,'Some Error occurd in Fetchin data')

      }
    }
  

  let subcategory = async () => {
    try {
      const { data } = await gifmaindata.trending();
      setreleted(data);
    } catch (error) {

      alert(error, "Some Error occurd in Fetchin data");

    }
  };
  useEffect(() => {
    subcategory();
  }, []);

  useEffect(() => {
  }, [update]);
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
          // src="https://imgs.search.brave.com/Jx8eAt3b3FFc7T8qGmK4AjpohtGB8b4pA1TYkGAkfTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzY1LzEzLzk0/LzM2MF9GXzk2NTEz/OTQwOV9JT21HVGVQ/Z2ZFVW44ek1YWnFw/YTlPRXRpRmJndkVC/TC5qcGc"
          src={update ? update : view.url} //yaha use kiya sahi na
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
              navigator.clipboard.writeText(update ? update : view.url);
            }}
          >
            {" "}
            Copy Url
            <ContentCopyIcon />
          </Button>
        </Box>
      </Box>

      <Typography variant="h4" textAlign={"left"} m={1} color="initial">
        Releted
        <Box
          sx={{
            marginTop: {},
            columnCount: { xs: 2, sm: 3, md: 5, lg: 5 },
            columnGap: "0.2rem",
            width: "100%",
          }}
        >
          {releted.map((e, i) => {
            return e.rating === view.cat ? (
              <Link
                to="/view"
                key={i}
                onClick={() => setupdate(e.images.fixed_width.url)}
              >
                <Box
                

                  component="img"
                  src={e.images.fixed_width.url}
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
            ) : (
              <p key={i}></p>
            );
          })}
        </Box>
      </Typography>
    </>
  );
}

export default GifView;
