import React from 'react';
import { ConfigThemeType } from '../../.generated/types';
import { Nav as ThemeSleekNav } from './ThemeSleek/Nav';
import { Nav as ThemeNewspaperNav } from './ThemeNewspaper/Nav';

type RC = typeof ThemeSleekNav;

const themeToPage: Record<ConfigThemeType, RC> = {
  sleek: ThemeSleekNav,
  newspaper: ThemeNewspaperNav,
  cardboard: ThemeNewspaperNav,
};

export function Nav({ theme = ConfigThemeType.Sleek }: { theme: ConfigThemeType | undefined }) {
  const ThemeSpecificNav = themeToPage[theme];
  return <ThemeSpecificNav />;
}
