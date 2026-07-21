import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "@/constants/theme";

export function SectionHeader({
  title,
  description,
  actionLabel,
  onActionPress,
}) {
  const shouldShowAction = Boolean(actionLabel && onActionPress);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {description ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
      </View>
      {shouldShowAction ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={actionLabel}
          hitSlop={8}
          onPress={onActionPress}
          style={({ pressed }) => [
            styles.action,
            pressed && styles.actionPressed,
          ]}
        >
          <Text style={styles.actionLabel}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.lg,
  },
  textContainer: { flex: 1 },
  title: {
    color: colors.textPrimary,
    fontSize: typography.heading,
    fontWeight: "700",
  },
  description: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
    marginTop: spacing.sm,
  },
  action: { paddingVertical: spacing.xs },
  actionPressed: { opacity: 0.6 },
  actionLabel: {
    color: colors.primary,
    fontSize: typography.caption,
    fontWeight: "600",
  },
});
