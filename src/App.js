import React from "react";
import { Box } from "@mui/material";
import ButtonAppBar from "./AppBar";
import PermanentDrawerLeft from "./PermanentDrawer";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Counter from "./components/usestatecounterbeautified";
import Counters from "./components/sivacounter1";
import Sivacounter from "./components/sivacounter2";
import Nagcounter from "./components/sivacounter3";
import Ounters from "./components/sivacounter4";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ display: "flex" }}>
        <ButtonAppBar />
        <PermanentDrawerLeft />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 3,
            marginTop: "64px", // AppBar height
            marginLeft: "140px", // Drawer width
            position: "relative", // To enable absolute positioning of children
            height: "calc(100vh - 64px)", // Full viewport height minus AppBar height

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
            
          }}
        >
          {/* Top-Left */}
          <Box sx={{ position: "absolute", top: 25, left: -100 }}>
            <Counter />
          </Box>
          {/* Top-Right */}
          <Box sx={{ position: "absolute", top: 25, right: 100,
            
           }}>
            <Sivacounter />
          </Box>
          {/* Center */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "10%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Counters />
          </Box>
          {/* Bottom-Left */}
          <Box sx={{ position: "absolute", bottom: 100, left: -100 }}>
            <Nagcounter />
          </Box>
          {/* Bottom-Right */}
          <Box sx={{ position: "absolute", bottom: 100, right: 100 }}>
            <Ounters />
          </Box>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
