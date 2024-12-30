"use client";

import { useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Avatar, Box, Typography } from "@mui/material";

import { RootState, AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";

import { setData } from "@/store/carousel";

export default function CarouselSection() {
  // ** Redux Hooks
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.carousel);

  async function fetchData() {
    fetch("https://677223aaee76b92dd4913ccc.mockapi.io/api/carousels")
      .then((res) => res.json())
      .then((res) => {
        const newItems = res.map((item: any) => ({
          id: Number(item.id),
          name: item.name,
          image_url: item.image_url,
        }));
        // console.log(newItems);
        dispatch(setData(newItems));
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={store.data.length}
        interval={3000}
        isPlaying={true}
      >
        <Slider>
          {store.data?.map((item, index) => (
            <Slide key={`carousel-slide-${item.id}`} index={index}>
              <Avatar
                variant="square"
                sx={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
                src={item.image_url}
              />
              <Typography>{item.name}</Typography>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Box>
  );
}
