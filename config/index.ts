import {
  ISidebar_Items,
  ISocial_Icons,
  IHome_Card_Info,
  IHomeManual,
  IHomeAdvantage,
  IQuestions,
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

export const questionsData: IQuestions[] = [
  {
    id: 1,
    question: "Kursni qanday boshlash mumkin?",
    answer:
      "Ro'yxatdan o'tish kerak. Keyin xohlagan kursga kirish imkoniyati mavjud bo'ladi.",
  },
  {
    id: 2,
    question: "Kursni qaysi vaqtda boshlanadi?",
    answer:
      "Hech qanday vaqt belgilanmagan. Xohlagan vaqt boshlash mumkin bo'ladi.",
  },
  {
    id: 3,
    question: "Kursga kirish uchun qancha vaqt ajratilgan?",
    answer:
      "Hech qanday vaqt cheklovi mavjud emas! Sizga kursga foydalanish huquqini bir umrga beramiz.",
  },
  {
    id: 4,
    question: "Kursni bitirib nimalarga ega bo'laman?",
    answer:
      "Sizga kursni tugatib sertifikat yoki shunga o'xshash tasdiqlovchi nimadur berolmaymiz. Sizga bilim va portfolion uchun amaliy loyihalar taqdim etamiz holos!",
  },
  {
    id: 5,
    question: "Platformadagi yangiliklarni qanday xabardor bo'lishim mumkin?",
    answer:
      "Bizning telegram kanalimizga obuna bo'lsangiz kifoya, t.me/rofiyevdilshod",
  },
  {
    id: 6,
    question: "Hamkorlik qilishimiz mumkinmi?",
    answer:
      "Xa siz o'zingiz xohlagan miqdorda homiylik qilishingiz mumkin, platformaning rivoji uchun, agarda pullik darsliklar chiqsa sharoit yo'q studentlarga homiylik qilishingiz mumkin bo'ladi. Va yana server, ma'lumotlar bazasi, montaj, dastur ta'minotlar uchun ham o'z hissangizni qo'shishingiz mumkin.",
  },
  {
    id: 7,
    question: "Video darsliklarni yuklab olish mumkinmi?",
    answer:
      "Yo'q videodarsliklarni yuklab ololmaysiz faqat platformani o'zida ko'rishingiz mumkin.",
  },
  {
    id: 8,
    question: "Qanday qilib muallif bilan bog'lansam bo'ladi?",
    answer: "Kantakt bo'limiga o'tib xabar yozib qoldirsangiz bo'ladi.",
  },
];
