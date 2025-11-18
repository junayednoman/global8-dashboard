import {
  Bell,
  CalendarCheck,
  CircleAlert,
  CircleDollarSign,
  Settings,
  Store,
  UserRoundCog,
} from "lucide-react";

type TNavMain = {
  title: string;
  url: string;
  icon: React.ReactNode;
}[];

export const navItems: TNavMain = [
  {
    title: "User Management",
    url: "/dashboard/user-management",
    icon: <UserRoundCog />,
  },
  {
    title: "Complaints",
    url: "/dashboard/complaints",
    icon: <CircleAlert />,
  },
  {
    title: "Events",
    url: "/dashboard/events",
    icon: <CalendarCheck />,
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: <Store />,
  },
  {
    title: "Earnings",
    url: "/dashboard/earnings",
    icon: <CircleDollarSign />,
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: <Bell />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <Settings />,
  },
];
