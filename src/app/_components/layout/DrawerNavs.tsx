"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

import { USER_NAVS } from "./navs";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function UserPageLayoutDrawerNavs() {
  const [userActionAnchorEl, setUserActionAnchorEl] =
    useState<null | HTMLElement>(null);

  const pathName = usePathname();

  const isSelected = (href: string) => {
    const pathSplitted = pathName.split("/");
    return "/" + pathSplitted[1] === href;
  };

  const currNavs = USER_NAVS;

  const handleClose = () => setUserActionAnchorEl(null);

  return (
    <Stack justifyContent="space-between" sx={{ height: "100%" }}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="/ariel-christian-dummy-logo.ico" />
          </ListItemAvatar>
        </ListItem>
        {currNavs.map((nav, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              LinkComponent={Link}
              href={nav.href}
              selected={isSelected(nav.href)}
            >
              <ListItemIcon>{nav.icon}</ListItemIcon>
              <ListItemText primary={nav.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Divider />
        <ListItem
          secondaryAction={
            <IconButton onClick={(e) => setUserActionAnchorEl(e.currentTarget)}>
              <MoreVertIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src="ariel-christian-dummy-logo.jpg" />
          </ListItemAvatar>
          <ListItemText primary={"admin@gmail.com"} />
        </ListItem>
      </List>

      <Menu
        anchorEl={userActionAnchorEl}
        id="account-menu"
        open={!!userActionAnchorEl}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mb: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                bottom: -10,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <Typography>Settings</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </Stack>
  );
}
