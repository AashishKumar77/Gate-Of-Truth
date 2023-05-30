import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import ListIcon from "@mui/icons-material/List";

const Navbs = () => {
  const isMdScreen = useMediaQuery("(max-width: 960px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isMdScreen ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <ListIcon />
          </IconButton>
        ) : (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Brand
          </Typography>
        )}
        {isMdScreen ? (
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List>
              {/* Navigation links */}
              <ListItem button component="a" href="#home">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="a" href="#about">
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component="a" href="#services">
                <ListItemText primary="Services" />
              </ListItem>
              {/* Add more links as needed */}
            </List>
          </Drawer>
        ) : (
          <Button color="inherit" sx={{ marginLeft: "auto" }}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbs;
