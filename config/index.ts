import {
  ISidebar_Items,
  ISocial_Icons,
  IHome_Card_Info,
  IHomeManual,
  IHomeAdvantage,
} from "@/interface";
import login_image from "@/assets/login.png";
import courses_image from "@/assets/courses.png";
import developer_image from "@/assets/developer.png";
import share_image from "@/assets/share.png";

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

export const homeCardInfo: IHome_Card_Info[] = [
  {
    title: "Kurslar",
    stat: 5,
  },
  {
    title: "Loyihalar",
    stat: 10,
  },
  {
    title: "O'quvchilar",
    stat: 100,
  },
];

export const homeManual: IHomeManual[] = [
  {
    image: login_image.src,
    desc_title: "Tizimga kirish -",
    desc: "kursga kirishdan oldin avalo ro`yxatdan o`tishingiz kerak bo`ladi!",
  },
  {
    image: courses_image.src,
    desc_title: "O`zingiz uchun kurs -",
    desc: "o`z sohangiz uchun kursni tanlashingiz mumkin va o`rganishni boshlang",
  },
  {
    image: developer_image.src,
    desc_title: "O`zingizda sinash -",
    desc: "xohlagan loyihangizni o`zingizda ham yozib borish va portfolio shakllantiring",
  },
  {
    image: share_image.src,
    desc_title: "Barchaga ulashish -",
    desc: "dasturchi yoshlarga va qiziqayotgan barchaga taklif qilishingiz mumkin boladi!",
  },
];

export const homeAdvantage: IHomeAdvantage[] = [
  {
    title: "Online",
    desc: "Istalgan vaqtda kun yokida tunda",
  },
  {
    title: "Joylashuv",
    desc: "Istalgan joyda turib o`rganish jarayoni",
  },
  {
    title: "Daraja",
    desc: "Biz blian soddalikdan murakkablikga qadar",
  },
  {
    title: "Guruhlar",
    desc: "Siz bizning guruhimizga qo`shilish imkoni bor",
  },
  {
    title: "Live chat",
    desc: "Live chat orqali savollarga javoblar beriladi",
  },
  {
    title: "Portfolio",
    desc: "Siz o`z portfoliongizni real loyihalar bilan boyiting",
  },
];