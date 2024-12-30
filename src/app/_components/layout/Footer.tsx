"use client";

import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.light", p: 2 }}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ color: "white" }}
        >
          &copy; Copyright 2024. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
