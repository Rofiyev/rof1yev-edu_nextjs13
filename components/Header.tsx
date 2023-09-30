"use client";

import {
  Button,
  Flex,
  useColorMode,
  Box,
  Container,
  Text,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun, FaArrowRight, FaHeart } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import logoWhite from "@/assets/logo-white.png";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/context/StateContext";

export default function Header() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { toggleSidebar } = useStateContext();

  return (
    <Box
      as="header"
      bg={colorMode !== "dark" ? "gray.50" : "gray.900"}
      pos={"fixed"}
      width={"100%"}
      zIndex={"1002"}
    >
      <Container maxW={"container.xl"}>
        <Flex align={"center"} justify={"space-between"}>
          <Flex align={"center"}>
            <Button
              colorScheme="gray"
              variant="ghost"
              display={{ base: "grid", xl: "none" }}
              placeItems={"center"}
              p={"1"}
              aria-label="Menu Icon"
              onClick={toggleSidebar}
            >
              <CgMenuLeft size={'20px'} />
            </Button>
            <Flex
              align={"center"}
              cursor={"pointer"}
              onClick={() => router.push("/")}
            >
              <Image
                src={logoWhite}
                width={75}
                height={75}
                alt="Logo"
                loading="lazy"
                style={{
                  filter:
                    colorMode !== "dark"
                      ? `invert(100%) sepia(0%) saturate(7500%) hue-rotate(234deg) brightness(116%) contrast(103%)`
                      : "",
                }}
              />
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Rof1yev
              </Text>
            </Flex>
          </Flex>
          <Flex gap={"10px"}>
            <Button
              display={{ sm: "none", md: "flex" }}
              alignItems={"center"}
              colorScheme={colorMode === "dark" ? "teal" : "gray"}
              leftIcon={<FaHeart style={{ color: "crimson" }} />}
            >
              <Link href={`https://t.me/rof1yev/`}>Sponsor</Link>
            </Button>
            <Button
              colorScheme="gray"
              variant="ghost"
              display={{ sm: "none", md: "grid" }}
              placeItems={"center"}
              p={"1"}
              aria-label="Email Icon"
            >
              <Link href={`mailto: rofiyevdilshod@gmail.com`}>
                <MdEmail />
              </Link>
            </Button>
            <Button
              onClick={toggleColorMode}
              colorScheme="gray"
              variant="ghost"
              display={"grid"}
              placeItems={"center"}
              p={"1"}
              border={1}
              aria-label="Mode Icon button"
            >
              {colorMode !== "dark" ? <BsMoonStarsFill /> : <FaSun />}
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              display={{ base: "grid", md: "none" }}
              placeItems={"center"}
              p={"1"}
              aria-label="Exit Icon button"
              onClick={() => router.push("/auth")}
            >
              <FaArrowRight />
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              display={{ base: "none", md: "block" }}
              onClick={() => router.push("/auth")}
            >
              Kirish
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Divider />
    </Box>
  );
}
