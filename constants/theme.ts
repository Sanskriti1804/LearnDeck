/**
 * App design tokens, plus Colors for Expo template components (tabs, themed views).
 */

export const colors = {
  background: "#F8FAFC",
  surface: "#FFFFFF",

  primary: "#4F46E5",
  primaryPressed: "#4338CA",

  textPrimary: "#0F172A",
  textSecondary: "#64748B",
  textOnPrimary: "#FFFFFF",

  border: "#E2E8F0",
  disabledBackground: "#CBD5E1",
  disabledText: "#64748B",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  round: 999,
} as const;

export const typography = {
  title: 36,
  heading: 24,
  body: 16,
  caption: 14,
} as const;

export const Colors = {
  light: {
    text: colors.textPrimary,
    background: colors.background,
    tint: colors.primary,
    icon: colors.textSecondary,
    tabIconDefault: colors.textSecondary,
    tabIconSelected: colors.primary,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: colors.primary,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: colors.primary,
  },
};
