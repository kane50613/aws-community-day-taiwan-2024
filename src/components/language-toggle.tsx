"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { locales } from "@/i18n.ts";
import { Languages } from "lucide-react";

const languageMap: Record<(typeof locales)[number], string> = {
  en: "English",
  "zh-Hant-Tw": "繁體中文",
};

const languagePathMap: Record<(typeof locales)[number], string> = {
  en: "/en",
  "zh-Hant-Tw": "/",
};

export const LanguageToggle = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="sm" aria-label="Theme toggle">
        <Languages className="w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {locales.map((locale) => (
        // no idea why next.js Link won't refresh locale param on layout,
        // so using anchor tag instead to force refresh
        <DropdownMenuItem key={locale} asChild>
          <a href={languagePathMap[locale]} lang={locale}>
            {languageMap[locale]}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
