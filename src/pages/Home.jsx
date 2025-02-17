import React, { useState, useContext, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { data, Link } from "react-router-dom";
// import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Gifstate, Maindata } from "../contextx/Data"; ///dj
import Filterpage from "../component/Filterpage";
function Home() {
  const [open, setOpen] = useState(false);
  const [mainhomegif, setmainhomegif] = useState([]);
  const { gifmaindata, filter, setfilter, favourate, view, setview } =
    Gifstate();
  let fetchhomedata = async () => {
    try {
      const { data } = await gifmaindata.trending(); //ye bta
      setmainhomegif(data);
    } catch (e) {
      alert(e,'Some Error occurd in Fetchin data')

    }
  };
  


  useEffect(() => {
    fetchhomedata();
  }, [gifmaindata]);
  return (
    <>
      <Box
        sx={{
          marginTop: {},
          columnCount: { xs: 2, sm: 3, md: 5, lg: 5 },
          columnGap: "0.2rem",
          width: "100%",
        }}
      >
        {
        

        mainhomegif.map((e, i) => (
          <Link to="/view" key={i}>
            <Box
              onClick={()=>setview((prev) => ({
                ...prev,
                url: e.images.fixed_width.url, //yaha set kiya clik pe
                name: e.title,
                cat: e.rating,           
              }))}
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
        ))}
      </Box>
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
            This webpage is currently for display purposes only. API integration
            is in progress
          </Typography>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            color="error"
            sx={{ margin: "10px 0 0 0" }}
          >
            Okay
          </Button>
        </Sheet>
      </Modal>
      <Filterpage/>
    </>
  );
}
export default Home;
