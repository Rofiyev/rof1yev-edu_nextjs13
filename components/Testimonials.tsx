"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorMode,
  Container,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const { colorMode } = useColorMode();

  let settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      width={"100%"}
      bg={colorMode === "light" ? "gray.100" : "gray.700"}
      borderRadius={"8px"}
      py={16}
      px={4}
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1 }} gap={2}>
          <GridItem w="100%" h="100%">
            <Slider {...settings}>
              {[...Array(6)].map((_: any, i: number) => (
                <Stack key={i} px={1}>
                  <Stack
                    bg={colorMode === "light" ? "gray.50" : "gray.900"}
                    boxShadow={"lg"}
                    p={8}
                    rounded={"xl"}
                    align={"center"}
                    pos={"relative"}
                    _after={{
                      content: `""`,
                      w: 0,
                      h: 0,
                      borderLeft: "solid transparent",
                      borderLeftWidth: 16,
                      borderRight: "solid transparent",
                      borderRightWidth: 16,
                      borderTop: "solid",
                      borderTopWidth: 16,
                      borderTopColor:
                        colorMode === "light" ? "gray.50" : "gray.900",
                      pos: "absolute",
                      bottom: "-16px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <Heading fontFamily={"inherit"} as={"h3"} fontSize={"xl"}>
                      Efficient Collaborating
                    </Heading>
                    <Text textAlign={"center"} fontSize={"sm"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Auctor neque sed imperdiet nibh lectus feugiat nunc sem.{" "}
                    </Text>
                  </Stack>
                  <Flex align={"center"} mt={8} direction={"column"}>
                    <Avatar
                      src={
                        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      }
                      mb={2}
                    />
                    <Stack spacing={-1} align={"center"}>
                      <Text fontWeight={600}>Jane Cooper</Text>
                      <Text fontSize={"sm"}>CEO at ABC Corporation</Text>
                    </Stack>
                  </Flex>
                </Stack>
              ))}
            </Slider>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
