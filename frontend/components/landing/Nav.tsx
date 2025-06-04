import React from "react";

import {
  Activity,
  CalendarCheck2,
  Camera,
  Component,
  HomeIcon,
  Info,
  Mail,
  MailCheck,
  MapPinHouse,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
const data = [
  {
    title: "Informacion",
    icon: (
      <MapPinHouse className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#info",
  },
  {
    title: "Confirmacion",
    icon: (
      <MailCheck className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#confirm",
  },
  {
    title: "Fotos",
    icon: (
      <Camera className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#photos",
  },
  {
    title: "Dress Code",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          color="currentColor"
        >
          <path d="M8 2c-1 0-.815 2.417-2.2 3.462c-1.032.777-2.907-.048-3.672 1.259c-.233.398-.118.924.112 1.975l1.99 9.089C4.62 19.567 4.858 21.743 7 22h10c2.141-.257 2.38-2.433 2.77-4.215l1.99-9.089c.23-1.051.345-1.577.112-1.975c-.765-1.307-2.64-.482-3.671-1.26C16.815 4.418 17 2 16 2m-3.991 9H12m.009 3.5H12m.009 3.5H12" />
          <path d="M7.724 2.119c.932-.524 2.217.822 2.88 1.325c.907.687 1.36 1.03 1.393 1.484a1 1 0 0 1 0 .144c-.033.453-.486.797-1.392 1.484c-.664.503-1.95 1.849-2.88 1.325c-.966-.542-.966-5.22 0-5.762" />
          <path d="M16.276 2.119c-.932-.524-2.217.822-2.88 1.325c-.907.687-1.36 1.03-1.393 1.484a1 1 0 0 0 0 .144c.033.453.486.797 1.392 1.484c.664.503 1.95 1.849 2.88 1.325c.966-.542.966-5.22 0-5.762" />
        </g>
      </svg>
    ),
    href: "#dressCode",
  },
  {
    title: "Agenda",
    icon: (
      <CalendarCheck2 className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#calendar",
  },
];

const Nav = () => {
  return (
    <div className="myScreen pt-3  fixed top-0 z-50 w-full flex justify-center">
      <div className="hidden lg:flex">
        <Dock className="items-end pb-3">
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>
                <a href={item.href}>{item.icon}</a>
              </DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
      <div className="lg:hidden flex gap-6 bg-white shadow-xl rounded-3xl py-3 px-6">
        {data.map((item, idx) => (
          <div 
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 p-2"
          >
            <div>
              <a href={item.href}>{item.icon}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
