import { Alert, StyleSheet, Text } from "react-native";

import { AppButton, LogoBadge, ScreenContainer } from "@/components/ui";
import { colors, spacing, typography } from "@/constants/theme";

export default function HomeScreen() {
  function handleStartLearning() {
    Alert.alert("Welcome to LearnDeck");
  }

  return (
    <ScreenContainer centered>
      <LogoBadge label="LD" />
      <Text style={styles.title}>Learn Deck</Text>
      <Text style={styles.subtitle}>
        Your personal space to collect, organize, learn and remember.
      </Text>
      <AppButton
        title="Start Learning"
        accessibilityLabel="Start using LearnDeck"
        onPress={handleStartLearning}
        fullWidth
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.textPrimary,
    fontSize: typography.title,
    fontWeight: "700",
    marginBottom: spacing.md,
    textAlign: "center",
  },
  subtitle: {
    maxWidth: 320,
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: spacing.xxl,
  },
});
