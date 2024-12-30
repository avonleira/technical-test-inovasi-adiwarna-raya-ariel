"use client";

import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import UserPageLayout from "../_components/layout";

export default function ContactUsPage() {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <UserPageLayout>
      <Container maxWidth="lg">
        <Typography variant="h3">Contact Us</Typography>
        <Typography variant="subtitle1" mb={1}>
          Please contact us for more information.
        </Typography>
        <Avatar
          variant="rounded"
          sx={{ width: "100%", height: upMd ? 300 : 180 }}
          src="images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg"
        />
        <List>
          <ListItem>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText>Jl. Ruko Klampis Megah Blok I-19</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText>+62 818-512-232 (Alvian L)</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AlternateEmailIcon />
            </ListItemIcon>
            <ListItemText>halo@inovasiadiwarna.com</ListItemText>
          </ListItem>
        </List>
      </Container>
    </UserPageLayout>
  );
}
