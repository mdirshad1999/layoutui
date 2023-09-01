import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dragable from "./Dragable";

function Compa() {
  return (
    <div>
      <Box
        component="div"
        sx={{
          p: 2,
          border: "1px dashed grey",
          bgcolor: " #008080",
          height: "40px",
          
        }}
      ></Box>
      <Box component="div" sx={{ p: 2, border: "1px solid grey" }}>
      <Box sx={{width:"80px",marginLeft:"180px"}}>
      <Dragable />
      </Box>

        
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Box
            bgcolor="#f2f2f2"
            border="1px solid black"
            p={4}
            textAlign="center"
            sx={{ height: "500px" }}
          >
          
            <Box
              sx={{
                "& button": { m: 1 },
                marginTop: "25px",
                marginRight: "15px",
              }}
            >
              <div>
                <Button sx={{bgcolor:"#b3b3b3",border:"1px solid gray",height:"40px"}}>
                  
                </Button>
                <Button  sx={{bgcolor:" #b3b3b3",border:"1px solid gray",height:"40px"}}>
                  
                </Button>
                <Button  sx={{bgcolor:" #b3b3b3",border:"1px solid gray",height:"40px"}}>
                  
                </Button>
              </div>
              <div>
                <Button  sx={{bgcolor:"#b3b3b3",border:"1px solid gray",height:"40px"}}>
                  
                </Button>
                <Button sx={{bgcolor:"#b3b3b3",border:"1px solid gray",height:"40px"}}>
                  
                </Button>
                <Button  sx={{bgcolor:" #b3b3b3",border:"1px solid gray",height:"40px"}} >
                  
                </Button>
              </div>
              <div>
                <Button  sx={{bgcolor:" #b3b3b3",border:"1px solid gray",height:"40px"}}>
                  
                </Button>
                <Button  sx={{bgcolor:" #b3b3b3",border:"1px solid gray",height:"40px"}}>
                  
                </Button>
                <Button sx={{bgcolor:" #b3b3b3",border:"1px solid gray",height:"40px"}}>
                  
                </Button>
              </div>
              
            </Box>
            
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Box p={4} textAlign="center" sx={{ height: "500px" }}></Box>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Box
            bgcolor="#f2f2f2"
            border="1px solid black"
            p={4}
            textAlign="center"
            sx={{ height: "500px" }}
          ></Box>
        </Grid>
         
        
      </Grid>
      
    </div>
  );
}

export default Compa;
