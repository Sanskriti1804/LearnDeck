import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/theme";

export function LogoBadge({ label = "LD", size = 72 }) {
  const borderRadius = Math.round(size * 0.28);
  const fontSize = Math.round(size * 0.33);

  return (
    //outer container for the logo
    <View
      accessibilityElementsHidden
      importantForAccessibility="no" //tells android accessibitlity services not to focus on this view
      style={[
        styles.container,
        //dynamic styling
        {
          width: size,
          height: size,
          borderRadius,
        },
      ]}
    >
      <Text style={[styles.label, { fontSize }]}> {label} </Text>
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
