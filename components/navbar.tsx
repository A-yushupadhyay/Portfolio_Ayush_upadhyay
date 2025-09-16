"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { DATA } from "@/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = DATA.navigation;

  return (
    <Navbar
      isBordered
      className="bg-background/70 backdrop-blur-md border-b border-divider"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-between items-center w-full">
        <NavbarBrand>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              className="font-bold text-inherit text-xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </motion.div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex justify-center gap-6 flex-grow">
          {menuItems.map((item, index) => (
            <NavbarItem key={item.name}>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  className={`flex items-center gap-2 transition-colors ${
                    pathname === item.href
                      ? "text-primary-500 font-semibold"
                      : "text-foreground hover:text-primary-500"
                  }`}
                  href={item.href}
                >
                  <Icon className="w-5 h-5 text-primary-500" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/80 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto max-w-lg space-y-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.name}>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  className="w-full flex items-center gap-3 py-3 px-4 rounded-medium hover:bg-content1 transition-colors"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 text-primary-500" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
