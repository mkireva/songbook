"use client";

import {GlobeIcon } from "lucide-react";

import { BG, US, DE, FR } from "country-flag-icons/react/3x2";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/src/components/ui/button";
import { Locale } from "@/src/lib/locales";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function DropdownMenuDemo() {
  const router = useRouter();

  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <GlobeIcon className="size-5 text-sky-700" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-42">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              handleLocaleChange("bg");
            }}
          >
            <BG title="United States" className="h-6 w-6 mr-2" />
            <span className="text-md">Bulgarian</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleLocaleChange("en");
            }}
          >
            <US title="United States" className="h-6 w-6 mr-2" />
            <span>English</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleLocaleChange("de");
            }}
          >
            <DE title="United States" className="h-6 w-6 mr-2" />
            <span>German</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleLocaleChange("fr");
            }}
          >
            <FR title="United States" className="h-6 w-6 mr-2" />
            <span>French</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
