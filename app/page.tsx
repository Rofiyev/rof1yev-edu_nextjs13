"use client";

import { ContentWrapper, Earth, Testimonials } from "@/components";
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
  Stack,
  Heading,
  Button,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import fon_javascript from "@/assets/javascript.png";
import { homeAdvantage, homeCardInfo, homeManual } from "@/config";
import { IHome_Card_Info, IHomeAdvantage, IHomeManual } from "@/interface";
import { LuLayoutList } from "react-icons/lu";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineProject,
} from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { GiLevelEndFlag } from "react-icons/gi";
import { RiChatVoiceLine } from "react-icons/ri";

const icons: JSX.Element[] = [
  <LuLayoutList fontSize={"2.8rem"} key={1} />,
  <AiOutlineFundProjectionScreen fontSize={"3rem"} key={2} />,
  <IoIosPeople fontSize={"3rem"} key={3} />,
];

export default function Home() {
  const { colorMode } = useColorMode();

  const advantage_icons: JSX.Element[] = [
    <Icon
      color={colorMode === "dark" ? "white" : "gray.700"}
      key={1}
      as={HiOutlineStatusOnline}
      w={10}
      h={10}
    />,
    <Icon
      color={colorMode === "dark" ? "white" : "gray.700"}
      key={2}
      as={FaLocationDot}
      w={10}
      h={10}
    />,
    <Icon
      color={colorMode === "dark" ? "white" : "gray.700"}
      key={3}
      as={GiLevelEndFlag}
      w={10}
      h={10}
    />,
    <Icon
      color={colorMode === "dark" ? "white" : "gray.700"}
      key={4}
      as={FaPeopleGroup}
      w={10}
      h={10}
    />,
    <Icon
      color={colorMode === "dark" ? "white" : "gray.700"}
      key={5}
      as={RiChatVoiceLine}
      w={10}
      h={10}
    />,
    <Icon
      color={colorMode === "dark" ? "white" : "gray.700"}
      key={6}
      as={AiOutlineProject}
      w={10}
      h={10}
    />,
  ];

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
                    asoslari va amaliy loyihalar makoni! Bizda barcha kurslani
                    boshlang`ichdan mukammallikgacha o`rganishingiz mumkin.
                    Dasturlashni biz bilan o`rganing!
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
                            px={{ base: 2, md: 3 }}
                            py={"3"}
                            shadow={"xl"}
                            border={"1px solid"}
                            borderColor={
                              colorMode === "light" ? "gray.800" : "gray.500"
                            }
                            rounded={"lg"}
                          >
                            <Flex justifyContent={"space-between"}>
                              <Box pl={{ base: 2, xl: 0, "2xl": 4 }}>
                                <StatLabel fontWeight={"medium"} isTruncated>
                                  {title}
                                </StatLabel>
                                <StatNumber
                                  fontSize={"2xl"}
                                  fontWeight={"medium"}
                                >
                                  {stat}+
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

          {/*  */}
          <Box mt={20}>
            <Stack width={"100%"} direction={{ base: "column", lg: "row" }}>
              <Stack flex={1} justify={{ lg: "center" }}>
                <Box mb={{ base: 8, md: 10 }}>
                  <Heading
                    mb={5}
                    fontSize={{ base: "2xl", md: "3xl" }}
                    letterSpacing={1}
                    fontFamily={"inherit"}
                  >
                    <Text as={"span"} color={"green.500"}>
                      Kurslardan
                    </Text>{" "}
                    to`liq foydalanish
                  </Heading>
                  <Text fontSize={{ sm: "16px", md: "xl" }}>
                    Siz uchun kurslardan foydalanish haqida qisqa ko`rsatma! Siz
                    bu orqali kursdan to`liq foydalanishingiz mumkin bo`ladi!
                    Sizni kurslarimizdan ko`rganimizdan juda ham xursandmiz!
                    Sizga omad va kelajakda zafarlar tilab qolamiz!
                  </Text>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  {homeManual.map((item: IHomeManual) => (
                    <Stack key={item.desc_title}>
                      <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        height={"120px"}
                        width={"120px"}
                        background={
                          colorMode === "light" ? "gray.100" : "gray.700"
                        }
                        borderRadius={"full"}
                        // p={1}
                        mb={4}
                      >
                        <Image
                          height={70}
                          width={70}
                          src={item.image}
                          alt="Image"
                          loading="lazy"
                        />
                      </Stack>
                      <Text>
                        <Text
                          as={"span"}
                          fontWeight={700}
                          fontFamily={"inherit"}
                          mb={3}
                          letterSpacing={1}
                        >
                          {item.desc_title}
                        </Text>{" "}
                        {item.desc}
                      </Text>
                    </Stack>
                  ))}
                </SimpleGrid>
              </Stack>
            </Stack>
          </Box>
          {/*  */}

          {/*  */}
          <Box mt={20}>
            <Heading
              mb={5}
              fontSize={{ base: "2xl", md: "3xl" }}
              letterSpacing={1}
              fontFamily={"inherit"}
            >
              <Text as={"span"} color={"green.500"}>
                Avzallik
              </Text>{" "}
              jihatlari
            </Heading>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {homeAdvantage.map(
                ({ title, desc }: IHomeAdvantage, i: number) => (
                  <Box
                    key={title}
                    maxW={{ base: "full", md: "275px" }}
                    w={"full"}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p={5}
                  >
                    <Stack align={"start"} spacing={2}>
                      <Flex
                        w={16}
                        h={16}
                        align={"center"}
                        justify={"center"}
                        color={"white"}
                        rounded={"full"}
                        bg={colorMode === "light" ? "gray.100" : "gray.700"}
                      >
                        {advantage_icons[i]}
                      </Flex>
                      <Box mt={2}>
                        <Heading size="md">{title}</Heading>
                        <Text mt={1} fontSize={"sm"}>
                          {desc}
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                )
              )}
            </Flex>
          </Box>
          {/*  */}

          {/* Testimonials */}
          <Box my={20}>
            <Flex mb="4">
              <Text
                fontSize={"xx-large"}
                fontWeight={"bold"}
                color={"green.500"}
              >
                Biz&nbsp;
              </Text>
              <Text fontSize={"xx-large"} fontWeight={"bold"} letterSpacing={2}>
                Haqimizda
              </Text>
            </Flex>
            <Testimonials />
          </Box>
        </Box>
        {/* Testimonials */}
      </Box>
    </ContentWrapper>
  );
}
