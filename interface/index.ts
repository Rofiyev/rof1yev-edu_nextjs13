import { ReactNode } from "react";

export interface StateContextProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

export interface ISocial_Icons {
  id: number;
  title: string;
  link: string;
}

export interface ISidebar_Items {
  id: number;
  text: string;
  route: string;
}

export interface IHome_Card_Info {
  title: string;
  stat: number;
}

export interface IHomeManual {
  image: string;
  desc_title: string;
  desc: string;
}

export interface IHomeAdvantage {
  title: string;
  desc: string;
}
