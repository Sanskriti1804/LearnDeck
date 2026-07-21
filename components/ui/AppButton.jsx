import {
  ActivityIndicator, //loading indicator
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import { colors, radius, spacing } from "@/constants/theme";

export function AppButton({
  title,
  onPress,
  variant = "primary", //default prop values
  disabled = false,
  loading = false,
  accessibilityLabel,
  fullWidth = false,
  style,
}) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === "primary" ? styles.primary : styles.secondary,
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? colors.textOnPrimary : colors.primary}
        />
      ) : (
        <Text
          style={[
            styles.label,
            variant === "primary" ? styles.primaryLabel : styles.secondaryLabel,
            isDisabled && styles.disabledLabel,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    minWidth: 160,

    alignItems: "center",

    justifyContent: "center",

    borderRadius: radius.md,
    paddingHorizontal: spacing.xl,

    paddingVertical: spacing.md,
    borderWidth: 1,
  },

  primary: {
    backgroundColor: colors.primary,

    borderColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.surface,
    borderColor: colors.primary,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
  },

  primaryLabel: {
    color: colors.textOnPrimary,
  },

  secondaryLabel: {
    color: colors.primary,
  },

  fullWidth: {
    width: "100%",
  },

  pressed: {
    opacity: 0.82,

    // Slightly shrink the button.
    transform: [{ scale: 0.98 }],
  },

  // Style applied when the button is disabled or loading.
  disabled: {
    backgroundColor: colors.disabledBackground,

    borderColor: colors.disabledBackground,
  },

  disabledLabel: {
    color: colors.disabledText,
  },
});
