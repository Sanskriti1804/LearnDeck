import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/theme";

type LogoBadgeProps = {
  label?: string;
  size?: number;
};

export function LogoBadge({ label = "LD", size = 72 }: LogoBadgeProps) {
  const borderRadius = Math.round(size * 0.28);
  const fontSize = Math.round(size * 0.33);

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no"
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius,
        },
      ]}
    >
      <Text style={[styles.label, { fontSize }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    marginBottom: 24,
  },
  label: { color: colors.textOnPrimary, fontWeight: "700" },
});
