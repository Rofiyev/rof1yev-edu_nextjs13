import { ISidebar_Items, ISocial_Icons } from "@/interface";

export const socialsIcons: ISocial_Icons[] = [
  {
    id: 1,
    title: "Telegram",
    link: "https://t.me/Rof1yev",
  },
  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com/rof1yev",
  },
  {
    id: 3,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/rofiyev-dilshod-25635a270",
  },
];

export const sidebarItem: ISidebar_Items[] = [
  {
    id: 1,
    text: "Bosh Sahifa",
    route: "/",
  },
  {
    id: 2,
    text: "Kurslar",
    route: "/courses",
  },
  {
    id: 3,
    text: "Kod Manbalar",
    route: "/resources",
  },
  {
    id: 4,
    text: "Kontakt",
    route: "/contact",
  },
  {
    id: 5,
    text: "FAQ",
    route: "/faq",
  },
];
