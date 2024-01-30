import { routes } from "@/app/router";
import HomeIcon from "./assets/home.png";
import ProfileIcon from "./assets/profile.png";
import TasksIcon from "./assets/tasks.png";

export const MENU_ITEMS: { url: string; icon: string, title: string }[] = [
  { url: routes.home, icon: HomeIcon, title: 'Главная' },
  { url: routes.tasks, icon: TasksIcon, title: 'Задачи' },
  { url: '', icon: ProfileIcon, title: 'Профиль' },
];
