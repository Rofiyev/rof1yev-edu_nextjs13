"use client";

import { socialsIcons } from "@/config";
import { ISocial_Icons } from "@/interface";
import {
  Box,
  useColorMode,
  Text,
  Flex,
  Container,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const icons: React.JSX.Element[] = [
  <FaTelegram key={1} />,
  <RiInstagramFill key={2} />,
  <FaLinkedin key={3} />,
];

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Box as="footer" bg={colorMode !== "dark" ? "gray.50" : "gray.900"}>
      <Divider />
      <Container maxW={"container.xl"}>
        <Flex
          align={"center"}
          py={"8px"}
          gap={"10px"}
          justify={"space-between"}
          direction={{ sm: "column", md: "row" }}
        >
          <Text fontSize={"1xl"} fontWeight={"normal"} textAlign={"center"}>
            © {new Date().getFullYear()} Rof1yev. Barcha huquqlar himoyalangan
          </Text>
          <Flex gap={"10px"}>
            {socialsIcons.map(({ title, link, id }: ISocial_Icons) => (
              <Link key={id} href={link} target="_blank">
                <IconButton
                  aria-label={title}
                  icon={icons[id - 1]}
                  borderRadius={"50%"}
                  boxShadow="sm"
                  p={"1"}
                />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
