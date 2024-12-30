"use client";

import { Fragment, ReactNode, useState } from "react";
import Link from "next/link";

import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import UserPageLayoutDrawerNavs from "./DrawerNavs";
import SearchBox from "./SearchBox";
import UserProfile from "./UserProfile";
import ToolbarNav from "./ToolbarNav";
import Footer from "./Footer";

const drawerWidth = 280;

interface Props {
  children: ReactNode;
  appbarTitle?: string;
  contentPadding?: number;
  showSearchBox?: boolean;
}
export default function UserPageLayout({
  children,
  appbarTitle = "Techincal Test",
  contentPadding = 2,
  showSearchBox = true,
}: Props) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const MainTitle = () => (
    <Typography
      variant="h6"
      textAlign={upMd ? "start" : "center"}
      width={upMd ? undefined : "100%"}
      component="div"
    >
      {appbarTitle}
    </Typography>
  );

  return (
    <Box>
      <AppBar position="sticky" color="primary">
        <Toolbar sx={{ gap: 2, alignItems: "center" }}>
          {upMd ? (
            <Link href="/home">
              <Avatar src="ariel-christian-dummy-logo.jpg" />
            </Link>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              // sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {upMd ? (
            <Fragment>
              <MainTitle />
              <ToolbarNav />
              {showSearchBox ? <SearchBox /> : null}
              <UserProfile />
            </Fragment>
          ) : showSearchBox ? (
            <SearchBox />
          ) : (
            <Fragment>
              <MainTitle />
              <IconButton edge="end" sx={{ ml: 2, visibility: "hidden" }}>
                <MenuIcon />
              </IconButton>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <UserPageLayoutDrawerNavs />
        </Drawer>
        {/* <Drawer
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
          <UserPageLayoutDrawerNavs />
        </Drawer> */}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: contentPadding,
          minHeight: "85vh",
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar sx={{ display: { sm: "none" } }} /> */}
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
