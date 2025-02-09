import { Box, Divider, Drawer, List,ListItemButton,ListItemText ,Typography} from "@mui/material";
import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
function Categories({menu,setmenue}) {
  let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
            height: "5  0%",
          },
        }}
      >
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center  '}}>

            <Typography variant="h4" sx={{color:'black'}}>Categories</Typography>
           <CancelIcon fontSize="2rem" onClick={()=>setmenue(false)} sx={{fontSize:'2.5rem', color:'red'} }/>
            
        </Box>
            <Divider/>
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

export default Categories;
