import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./sidebar.css";
class SideBar extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="root">
        {/* start navbar */}
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Dashboard React App
            </Typography>
          </Toolbar>
        </AppBar>

        {/* end navbar */}

        {/* start sidebar */}
        <Drawer
          variant="persistent"
          anchor="left"
          open={this.state.open}
          className="drawer"
        >
          <Box textAlign="right" className="drawerHeader">
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon></ChevronLeftIcon>
            </IconButton>
          </Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <RecentActorsIcon></RecentActorsIcon>
              </ListItemIcon>
              <ListItemText primary="Company Profile" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <PermIdentityIcon></PermIdentityIcon>
              </ListItemIcon>
              <ListItemText primary="Agent Data" />
            </ListItem>
          </List>
        </Drawer>

        {/* end sidebar */}
      </div>
    );
  }
}
export default SideBar;
