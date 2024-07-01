import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Counters() {
  const [count, setCount] = useState(1000);
  return (
    <Paper
      elevation={3}
      sx={{
        width: 150,
        height: 100,
        p: 3,
        backgroundImage: "linear-gradient(135deg, #a8edea, #fed6e3)",
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
        Counter+5
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
          onClick={() => setCount(count - 5)}
          sx={{
            backgroundImage: "linear-gradient(135deg, #a8edea, #fed6e3)",
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
          onClick={() => setCount(count + 5)}
          sx={{
            backgroundImage: "linear-gradient(135deg, #a8edea, #fed6e3)",
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



