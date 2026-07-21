// SafeArea keeps content clear of notches/status bars
import { SafeAreaView, StyleSheet, View } from "react-native";

import { colors, spacing } from "@/constants/theme";

// Screen wrapper — children is the content nested inside this component
export function ScreenContainer({ children, centered = false, style }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.content, centered && styles.centered, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, paddingHorizontal: spacing.xl },
  centered: { alignItems: "center", justifyContent: "center" },
});
