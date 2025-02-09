import React, { Link } from "react";
import { Box } from "@mui/material";
import Maincomp from "../component/Maincomp";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
function Home() {
  const [open, setOpen] = React.useState(true);
  let demo = () => {
    let num = Math.floor(Math.random() * 4) + 1;
    return num;
  };

  let imgs = [
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
  ];
  return (
    <>
      <Maincomp imgs={imgs} />

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: "lg", mb: 1 }}
          >
            This Webpage is under Process
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
          This webpage is currently for display purposes only. API integration is in progress
          </Typography>
        </Sheet>
      </Modal>
    </>
  );
}

export default Home;
