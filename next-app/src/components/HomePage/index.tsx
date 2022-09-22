import React from 'react';
import { ConfigThemeType } from '../../.generated/types';
import type { HomepageData } from '../../data/homepage';
import { HomePage as ThemeSleekHomePage } from './ThemeSleek/HomePage';
import { HomePage as ThemeNewspaperHomePage } from './ThemeNewspaper/HomePage';

type RC = typeof ThemeSleekHomePage;

const themeToPage: Record<ConfigThemeType, RC> = {
  sleek: ThemeSleekHomePage,
  newspaper: ThemeNewspaperHomePage,
  cardboard: ThemeNewspaperHomePage,
};

export function HomePage(homepageData: HomepageData) {
  const theme: ConfigThemeType = homepageData.config?.theme || ConfigThemeType.Sleek;
  const ThemeSpecificHomePage = themeToPage[theme];
  return <ThemeSpecificHomePage {...homepageData} />;
}
