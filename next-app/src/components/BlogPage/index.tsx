import React from 'react';
import { ConfigThemeType } from '../../.generated/types';
import type { BlogpageData } from '../../data/blogpage';
import { BlogPage as ThemeSleekBlogPage } from './ThemeSleek/BlogPage';
import { BlogPage as ThemeNewspaperBlogPage } from './ThemeNewspaper/BlogPage';
import { BlogPage as ThemeCardboardBlogPage } from './ThemeCardboard/BlogPage';

type RC = typeof ThemeSleekBlogPage;

const themeToPage: Record<ConfigThemeType, RC> = {
  sleek: ThemeSleekBlogPage,
  newspaper: ThemeNewspaperBlogPage,
  cardboard: ThemeCardboardBlogPage,
};

export function BlogPage(blogpageData: BlogpageData) {
  const theme: ConfigThemeType = blogpageData.config?.theme || ConfigThemeType.Sleek;
  const ThemeSpecificBlogPage = themeToPage[theme];
  return <ThemeSpecificBlogPage {...blogpageData} />;
}
