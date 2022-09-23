import React from 'react';
import { ConfigThemeType } from '../../.generated/types';
import { Footer as ThemeSleekFooter } from './ThemeSleek/Footer';
import { Footer as ThemeNewspaperFooter } from './ThemeNewspaper/Footer';
import { Footer as ThemeCardboardFooter } from './ThemeCardboard/Footer';

type RC = typeof ThemeSleekFooter;
const themeToPage: Record<ConfigThemeType, RC> = {
  sleek: ThemeSleekFooter,
  newspaper: ThemeNewspaperFooter,
  cardboard: ThemeCardboardFooter,
};

export function Footer({ theme = ConfigThemeType.Sleek }: { theme: ConfigThemeType | undefined }) {
  const ThemeSpecificFooter = themeToPage[theme];
  return <ThemeSpecificFooter />;
}
