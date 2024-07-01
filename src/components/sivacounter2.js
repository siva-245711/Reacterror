import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Sivacounter() {
  const [count, setCount] = useState(0);


  return (
    <Paper
      elevation={3}
      sx={{
        width: 100,
        height: 100,
        p: 3,
        backgroundImage: "linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)",
        
        color: "#01b4e4",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h6"
        sx={{
           fontFamily: "cursive",
          fontWeight: 600,
          textAlign: "center",
          color: "whitesmoke",
        }}
      >
        Counter+2
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "cursive",
          fontWeight: 700,
          color: "whitesmoke",
          textAlign: "center",
        }}
      >
        {count}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Button
          variant="contained"
          startIcon={<RemoveIcon />}
          onClick={() => setCount(count - 2)}
          sx={{
            backgroundImage: "linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)",
        
            "&:hover": { backgroundColor: "#0d253f" },
            size: "small",
            minWidth: 'auto', 
            padding: '2px 3px',
            paddingLeft: '12px',
            margin: '5px 5px',
            borderRadius: '100px',

          }}
        >
          
        </Button>
       
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => setCount(count + 2)}
          sx={{
           
            backgroundImage: "linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)",
            
            
            "&:hover": { backgroundColor: "#01b4e4", color: "#ffffff" },
            size: "small",
            minWidth: 'auto', 
            padding: '2px 3px',
            paddingRight: '12px',
            margin: '5px 5px',
            borderRadius: '100px',
          }}
        >
          
        </Button>
      </Box>
    </Paper>
  );
}

export default Sivacounter;
