"use client";

import { Container } from "@mui/material";

import UserPageLayout from "../_components/layout";
import CarouselSection from "./_components/CarouselSection";

export default function HomePage() {
  return (
    <UserPageLayout>
      <Container maxWidth="lg">
        <CarouselSection />
      </Container>
    </UserPageLayout>
  );
}
