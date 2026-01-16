import { Home, User, FolderOpen, Code2, Sparkles, Mail } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: Home,
  },
  {
    name: "Services",
    hash: "#services",
    icon: Sparkles,
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: FolderOpen,
  },
  {
    name: "About Us",
    hash: "#about",
    icon: User,
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: Code2,
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: Mail,
  },
] as const;
