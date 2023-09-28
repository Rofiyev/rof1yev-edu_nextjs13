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
