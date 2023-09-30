"use client";

import {
  Box,
  useColorMode,
  Text,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
} from "@chakra-ui/react";
import { ImHome } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { FaFolderOpen } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { IconType } from "react-icons/lib";
import { sidebarItem } from "@/config";
import { ISidebar_Items } from "@/interface";
import { useStateContext } from "@/context/StateContext";
import { usePathname, useRouter } from "next/navigation";

const socials_icons: IconType[] = [
  ImHome,
  RxDashboard,
  FaFolderOpen,
  LuContact,
];

export default function Sidebar() {
  const { colorMode } = useColorMode();
  const { onOpen, onClose } = useDisclosure();
  const { push } = useRouter();
  const pathname = usePathname();

  const { showSidebar } = useStateContext();

  return (
    <Box
      as="aside"
      width={"300px"}
      height={`100vh !important`}
      pos={"fixed"}
      top={"0"}
      left={{ sm: showSidebar ? "-100%" : "0%", xl: "0%" }}
      transition={"all 0.3s ease-in-out"}
      bg={colorMode !== "dark" ? "gray.50" : "gray.900"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      zIndex={"1001"}
    >
      <List spacing={3} p={"5"} pt={"32"}>
        {sidebarItem.map(({ id, route, text }: ISidebar_Items) => (
          <ListItem
            key={id}
            fontFamily={"inherit"}
            display={"flex"}
            alignItems={"center"}
            p={4}
            cursor={"pointer"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            _hover={{ bg: colorMode === "light" ? "gray.100" : "gray.700" }}
            borderRadius={"md"}
            bg={
              (pathname === route && colorMode === "light" ? "gray.100" : "") ||
              (pathname === route && colorMode === "dark" ? "gray.700" : "")
            }
            onClick={() => push(`${route}`)}
          >
            <ListIcon
              as={socials_icons[id - 1]}
              color={colorMode !== "dark" ? "#1a202c" : "whiteAlpha.700"}
            />
            {text}
          </ListItem>
        ))}
      </List>
      <Text textAlign={"center"}>@Rof1yev - Online Education</Text>
    </Box>
  );
}
