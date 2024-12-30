"use client";

import { Button, Stack, Typography } from "@mui/material";

import { USER_NAVS } from "./navs";
import Link from "next/link";

export default function ToolbarNav() {
  return (
    <Stack
      direction="row"
      gap={2}
      alignItems="center"
      sx={{ flexGrow: 1, paddingLeft: 2 }}
    >
      {USER_NAVS.map((item, index) => (
        <Button
          LinkComponent={Link}
          href={item.href}
          key={`toolbar-nav-item-${index}`}
          variant="text"
          color="inherit"
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
}
