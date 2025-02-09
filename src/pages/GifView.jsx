import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Home from "./Home";
function GifView() {
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
          src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/2_5acf9bab-5dd3-4e04-b42c-d4985ccda17b.jpg?v=1676615530"
          sx={{
            height: {
              xs: "20rem",
              sm: "20rem",
              md: "20rem",
              lg: "40rem",
            },
            margin: "0 auto",
          }}
        />

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
          <Button
            variant="contained"
            sx={{
              display: "flex",
              gap: ".5rem",
              padding: { sm: "2px 5px", md: "2px 5px", lg: "10px 15px" },
              fontWeight: 700,
            }}
          >
            {" "}
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
          >
            {" "}
            Copy Url
            <ContentCopyIcon />
          </Button>
        </Box>
      </Box>

      <Typography variant="h4" textAlign={'center'} color="initial">home</Typography>
      <Home />
    </>
  );
}

export default GifView;
