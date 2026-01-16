import {
  Home,
  User,
  FolderOpen,
  Code2,
  GraduationCap,
  Mail,
} from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: Home,
  },
  {
    name: "About",
    hash: "#about",
    icon: User,
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: FolderOpen,
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: Code2,
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: GraduationCap,
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: Mail,
  },
] as const;
