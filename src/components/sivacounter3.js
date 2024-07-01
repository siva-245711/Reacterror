import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Nagcounter() {
  const [count, setCount] = useState(0);

  return (
    <Paper
      elevation={3}
      sx={{
        width: 100,
        height: 150,
        p: 3,
        backgroundImage: "linear-gradient(135deg, #948E99, #2E1437)",
        
        borderRadius: 10,
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
        Counter+3
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
          onClick={() => setCount(count - 3)}
          sx={{
            backgroundImage: "linear-gradient(135deg, #948E99, #2E1437)",
            "&:hover": { backgroundColor: "yellow" },
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
          onClick={() => setCount(count + 3)}
          sx={{
           
            backgroundImage: "linear-gradient(135deg, #948E99, #2E1437)",
            
            "&:hover": { backgroundColor: "yellow", color: "#ffffff" },
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

export default Nagcounter;
