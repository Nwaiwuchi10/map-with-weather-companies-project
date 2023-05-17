import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Style.css";

import { BiSearch } from "react-icons/bi";
import { FiBell, FiUserCheck, FiUserPlus, FiUsers } from "react-icons/fi";
import { MdOutlineArrowDropDown, MdAccountCircle } from "react-icons/md";
import SideBar from "./SideBar";
import { optionType } from "../../Data/Types/Type";

// import SideBsr from "./SideBsr";
const drawerWidth = 240;

interface Props {
  children: any;

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export const Toolbars = () => {
  return (
    <div className="imgs-disp-div">
      <div className="img-cont">
        {" "}
        {/* <img src={union} alt="heu" className="img-union" /> */}
      </div>
      <div className="img-cont2">
        {/* <img src={lends} alt="lend" className="imgs-lend" /> */}
      </div>
      <Toolbar />
    </div>
  );
};

export default function Dashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbars />
      <Divider />
      <List style={{ color: "#213F7D" }}>
        <SideBar />
      </List>
      <Divider />
      <List></List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#FFFFFF",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#171744" }} />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black" }}
          >
            Map Weather
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>{props.children}</Typography>
      </Box>
    </Box>
  );
}
