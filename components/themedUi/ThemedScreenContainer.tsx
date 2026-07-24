import type { PropsWithChildren } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, spacing } from "@/constants/theme";

type ScreenContainerProps = PropsWithChildren<{
  centered?: boolean;
  style?: StyleProp<ViewStyle>;
}>;

export default function ThemedScreenContainer({
  children,
  centered = false,
  style,
}: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
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
