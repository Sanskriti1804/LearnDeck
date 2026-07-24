import { Alert,  StyleSheet, Text, View } from "react-native";
import {StatusBar} from "expo-status-bar"

import { AppButton, LogoBadge, ScreenContainer } from "@/components/ui";
import { colors, spacing, typography } from "@/constants/theme";
import { Link } from "expo-router";

export default function HomeScreen() {
  function handleStartLearning() {
    Alert.alert("Welcome to LearnDeck");
  }

  return (
    <ScreenContainer style = {[styles.container, {backgroundColor : "gray"}]}>
      <LogoBadge label="LD" />
      <Text style={[styles.title ]}>Learn Deck</Text>
      <Text style={styles.subtitle}>
        Your personal space to collect, organize, learn and remember.
      </Text>
      <AppButton
        title="Start Learning"
        accessibilityLabel="Start using LearnDeck"
        onPress={handleStartLearning}
        fullWidth
      />
      <View>
        <Link href="/profile" style = {styles.link}>Hello Baby</Link>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container : {
    alignContent : "center",
    justifyContent : "center"
  },
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
  link : {
    paddingTop : 20,
    textDecorationLine : "underline"
  }
});
