import type { LucideIcon } from "lucide-react";
import { BookOpen, Gamepad2, Hammer, Layers, Swords, Ticket, TrendingUp, Users } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Hammer, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "modes", path: "/modes", icon: Layers, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "codes", path: "/codes", icon: Ticket, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
