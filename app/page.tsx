"use client";

import { ContentWrapper, Earth } from "@/components";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  useColorMode,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Image from "next/image";
import fon_javascript from "@/assets/javascript.png";
import { homeCardInfo } from "@/config";
import { IHome_Card_Info } from "@/interface";
import { LuLayoutList } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

const icons: JSX.Element[] = [
  <LuLayoutList fontSize={"2.8rem"} key={1} />,
  <AiOutlineFundProjectionScreen fontSize={"3rem"} key={2} />,
  <IoIosPeople fontSize={"3rem"} key={3} />,
];

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <ContentWrapper>
      <Box pos={"relative"} width="100%" minHeight="100vh">
        <Box
          style={{
            width: "800px",
            height: "100vh",
            position: "fixed",
            zIndex: "-1",
            top: "4%",
          }}
          right={{ sm: "-40%", md: "-10%" }}
        >
          <Image
            src={fon_javascript.src}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              objectFit: "contain",
              opacity: "0.3",
            }}
            loading="lazy"
            layout="fill"
            alt="Fon"
          />
        </Box>
        <Box>
          <Card>
            <CardBody paddingX={"2"} paddingY={"5"}>
              <Flex justify={"space-between"} px={3} gap={"20px"}>
                <Box w={{ sm: "100%", lg: "75%" }}>
                  <Flex direction={{ sm: "column", md: "row" }}>
                    <Text
                      fontSize={{ sm: "x-large", md: "xx-large" }}
                      fontWeight={"bold"}
                      letterSpacing={2}
                      color={"green.500"}
                    >
                      Rof1yev&nbsp;
                    </Text>
                    <Text
                      fontSize={{ sm: "large", md: "xx-large" }}
                      fontWeight={"bold"}
                      letterSpacing={2}
                    >
                      - Dasturlash Kurslari
                    </Text>
                  </Flex>
                  <Text mt={"3.5"} fontSize={{ sm: "16px", md: "xl" }}>
                    Dasturlash online platformasi. Boshlang`ich darajadan
                    mutaxasislikgacha ilk va ulkan qadam. Web texnalogiyasi
                    asoslari va amaliy loyihalar makoni! Dasturlashni biz bilan
                    o`rganing!
                  </Text>
                  <Box maxW="7xl" mx={"auto"} pt={5}>
                    <SimpleGrid
                      columns={{ base: 1, md: 3 }}
                      spacing={{ base: 5, lg: 8 }}
                    >
                      {homeCardInfo.map(
                        ({ title, stat }: IHome_Card_Info, i: number) => (
                          <Stat
                            key={title}
                            px={{ base: 2, md: 4 }}
                            py={"3"}
                            shadow={"xl"}
                            border={"1px solid"}
                            borderColor={
                              colorMode === "light" ? "gray.800" : "gray.500"
                            }
                            rounded={"lg"}
                          >
                            <Flex justifyContent={"space-between"}>
                              <Box pl={{ base: 2, md: 4 }}>
                                <StatLabel fontWeight={"medium"} isTruncated>
                                  {title}
                                </StatLabel>
                                <StatNumber
                                  fontSize={"2xl"}
                                  fontWeight={"medium"}
                                >
                                  {stat}
                                </StatNumber>
                              </Box>
                              <Box
                                my={"auto"}
                                color={
                                  colorMode === "light"
                                    ? "gray.800"
                                    : "gray.200"
                                }
                                alignContent={"center"}
                              >
                                {icons[i]}
                              </Box>
                            </Flex>
                          </Stat>
                        )
                      )}
                    </SimpleGrid>
                  </Box>
                </Box>
                <Box
                  display={{ sm: "none", lg: "flex" }}
                  sx={{ cursor: "grab" }}
                >
                  <Earth />
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </ContentWrapper>
  );
}
