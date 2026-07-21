import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  colors,
  spacing,
  typography,
} from "../../constants/theme";

export function EmptyLibrary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        No resources yet
      </Text>

      <Text style={styles.description}>
        Add your first learning resource to start building your library.
      </Text>
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