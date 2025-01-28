"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header1() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Programs",
      description: "Explore our programs and services.",
      href: "/programs",
    },
    {
      title: "Education Resources",
      description: "Access educational materials to learn more.",
      href: "/education-resources",
    },
    {
      title: "Community Support",
      description: "Join our community initiatives.",
      href: "/community-support",
    },
    {
      title: "About Us",
      description: "Learn more about our platform.",
      href: "/about-us",
    },
    {
      title: "Contact Us",
      description: "Get in touch with us.",
      href: "/contact-us",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/education-resources");
  }

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        {/* Desktop navigation */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <a href={item.href} className="text-sm font-medium hover:underline">
                    <Button variant="ghost">{item.title}</Button>
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <div className="flex lg:justify-center">
          <p className="font-semibold"></p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end w-full gap-4">
          <Button variant="ghost" className="hidden md:inline">
            Book a demo
          </Button>
          <div className="border-r hidden md:inline"></div>
          <Button variant="outline">Sign in</Button>
          <Button onClick={handleGetStartedClick}>Get started</Button>
        </div>

        {/* Mobile navigation */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <a href={item.href} className="flex justify-between items-center">
                    <span className="text-lg">{item.title}</span>
                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header1 };
