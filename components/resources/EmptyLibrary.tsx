import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "@/constants/theme";

type EmptyLibraryProps = {
  category: string;
};

export function EmptyLibrary({ category }: EmptyLibraryProps) {
  const message =
    category === "All"
      ? "Add your first learning resource to start building your library."
      : `No resources found in ${category}. Try another category or add a new one.`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No resources yet</Text>
      <Text style={styles.description}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: spacing.xxl,
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.heading,
    fontWeight: "700",
  },
  description: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
    textAlign: "center",
    marginTop: spacing.sm,
  },
});
