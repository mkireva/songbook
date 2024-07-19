"use client"
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { BookOpen } from "lucide-react";
import React, { useState } from 'react';
import { TeamToggle } from "components/themeToggler";
import { Button } from "components/ui/button";
import { LanguageSwitcher } from "./lang-switchter";

export default function Component() {
  const t = useTranslations("NavBar");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <BookOpen className="h-6 w-6" />
          <span className="text-md hidden md:block"> {t('title')}</span>
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          <Link
            href="/"
            className="text-sm hover:underline hover:underline-offset-4 data-[active=true]:underline data-[active=true]:underline-offset-4"
            prefetch={false}
            onClick={handleMenuClose}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-sm hover:underline hover:underline-offset-4 data-[active=true]:underline data-[active=true]:underline-offset-4"
            prefetch={false}
            onClick={handleMenuClose}
          >
            {t("about")}
          </Link>
          <Link
            href="/thoughts"
            className="text-sm hover:underline hover:underline-offset-4 data-[active=true]:underline data-[active=true]:underline-offset-4"
            prefetch={false}
            onClick={handleMenuClose}
          >
            {t("Thoughts")}
          </Link>
          <Link
            href="/songs"
            className="text-sm hover:underline hover:underline-offset-4 data-[active=true]:underline data-[active=true]:underline-offset-4"
            prefetch={false}
            onClick={handleMenuClose}
          >
            {t("songs")}
          </Link>
          <LanguageSwitcher />
          <TeamToggle />
        </nav>
        <div className="flex items-center gap-2 lg:hidden ">
          <LanguageSwitcher />
          <TeamToggle />
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={handleMenuToggle}>
                <MenuIcon className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onSelect={handleMenuClose}>
                <Link
                  href="/"
                  className="flex w-full items-center justify-between py-2 px-4 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                  onClick={handleMenuClose}
                >
                  {t("home")}
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleMenuClose}>
                <Link
                  href="/about"
                  className="flex w-full items-center justify-between py-2 px-4 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                  onClick={handleMenuClose}
                >
                  {t("about")}
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleMenuClose}>
                <Link
                  href="/thoughts"
                  className="flex w-full items-center justify-between py-2 px-4 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                  onClick={handleMenuClose}
                >
                  {t("Thoughts")}
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleMenuClose}>
                <Link
                  href="/songs"
                  className="flex w-full items-center justify-between py-2 px-4 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                  onClick={handleMenuClose}
                >
                  {t("songs")}
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
