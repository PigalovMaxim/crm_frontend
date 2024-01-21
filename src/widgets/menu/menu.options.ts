import { routes } from "@/app/router";
import HomeIcon from "./assets/home.png";
import ProfileIcon from "./assets/profile.png";

export const MENU_ITEMS: { url: string; icon: string, title: string }[] = [
  { url: routes.home, icon: HomeIcon, title: 'Главная' },
  { url: routes.home, icon: ProfileIcon, title: 'Профиль' },
];
