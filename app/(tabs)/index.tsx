import { Alert,  StyleSheet, Text, View } from "react-native";
import {StatusBar} from "expo-status-bar"

import {  LogoBadge } from "@/components/ui";
import { colors, spacing, typography } from "@/constants/theme";
import { Link } from "expo-router";
import  ThemedView  from "@/components/themedUi/ThemedView";
import ThemedText from "@/components/themedUi/ThemedText";
import ThemedScreenContainer from "@/components/themedUi/ThemedScreenContainer"
import AppButton from "@/components/themedUi/AppButton"

export default function HomeScreen() {
  function handleStartLearning() {
    Alert.alert("Welcome to LearnDeck");
  }

  return (
    <ThemedScreenContainer style = {[styles.container, {backgroundColor : "gray"}]}>
      <ThemedView style = {styles.container}>
      <LogoBadge label="LD" />
      <ThemedText>Learn Deck</ThemedText>
      <Text style={styles.subtitle}>
        Your personal space to collect, organize, learn and remember.
      </Text>
      <AppButton
        title="Start Learning"
        accessibilityLabel="Start using LearnDeck"
        onPress={handleStartLearning}
        fullWidth
      />

      </ThemedView>
      <View>
        <Link href="/profile" style = {styles.link}>Hello Baby</Link>
      </View>
    </ThemedScreenContainer>
  );
}

const styles = StyleSheet.create({
  container : {
    alignContent : "center",
    justifyContent : "center",
    backgroundColor : "pink"
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
